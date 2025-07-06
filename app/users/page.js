import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Users page",
  description: "users page desc",
};

export default async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Username:</span> {user.username}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Company:</span>{" "}
                {user.company?.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
