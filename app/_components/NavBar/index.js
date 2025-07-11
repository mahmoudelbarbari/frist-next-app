"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Users", path: "/users" },
  { name: "Login", path: "/login" },
  { name: "Todos", path: "/todos" },
  { name: "Add Todos", path: "/todos/add" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="bg-black py-4 px-4">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`mr-4 font-bold ${
            pathname == link.path ? "text-white" : " text-fuchsia-200"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
