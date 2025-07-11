import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Users page",
  description: "users page desc",
};

export default async function page() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/users`);
  const data = await res.json();
  console.log(data);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">User Directory</h1>
      <Link
        href={"/users/add-user"}
        className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300"
      >
        Add User
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-5">
        {data.map((user) => (
          <Link href={`/users/${user._id}`} key={user._id}>
            <div className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {user.name}
              </h2>

              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-medium">Phone:</span> {user.phoneNum}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Company:</span> {user.company}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
