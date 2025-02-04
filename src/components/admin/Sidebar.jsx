// File: src/components/admin/Sidebar.jsx
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiFileText, FiBook, FiMail, FiHome } from "react-icons/fi";

export default function Sidebar({ logout }) {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", href: "/admin/dashboard", icon: <FiHome size={20} /> },
    { label: "Blog", href: "/admin/dashboard/blog", icon: <FiFileText size={20} /> },
    { label: "Pustaka", href: "/admin/dashboard/pustaka", icon: <FiBook size={20} /> },
    { label: "Message", href: "/admin/dashboard/message", icon: <FiMail size={20} /> }
  ];
  return (
    <aside className="bg-white shadow-xl h-screen w-64 p-6 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#2EA4E0]">Admin Panel</h2>
      </div>
      <nav className="flex flex-col space-y-4 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center px-4 py-3 rounded-lg transition-all ${
              pathname === item.href
                ? "bg-gradient-to-r from-[#8DC43F] to-[#2EA4E0] text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span className="ml-3">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-all"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
