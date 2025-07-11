"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/users`);
      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/users/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.text();
        alert("Error deleting user: " + error);
        return;
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user._id);
    setFormData({
      name: user.name,
      email: user.email,
      phoneNum: user.phoneNum,
      company: user.company,
    });
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setFormData({});
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const error = await res.text();
        alert("Error updating user: " + error);
        return;
      }

      const updatedUser = await res.json();

      setUsers((prev) =>
        prev.map((user) => (user._id === id ? updatedUser : user))
      );

      setEditingUserId(null);
      setFormData({});
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    }
  };

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
        {users.map((user) => (
          <div
            key={user._id}
            className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300"
          >
            {editingUserId === user._id ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phoneNum"
                  value={formData.phoneNum}
                  onChange={handleChange}
                  className="w-full mb-2 p-2 border rounded"
                  placeholder="Phone Number"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full mb-3 p-2 border rounded"
                  placeholder="Company"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(user._id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href={`/users/${user._id}`}>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Email:</span> {user.email}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">Phone:</span> {user.phoneNum}
                  </p>
                  <p className="text-gray-600 text-sm mb-3">
                    <span className="font-medium">Company:</span> {user.company}
                  </p>
                </Link>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-600 border border-blue-300 rounded px-3 py-1 text-sm hover:bg-blue-50 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-600 border border-red-300 rounded px-3 py-1 text-sm hover:bg-red-50 transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
