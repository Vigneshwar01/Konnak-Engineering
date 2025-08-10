"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { href: "/#whoare", label: "Who We Are" },
    { href: "/#whatwedo", label: "What We Do" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-600 group-hover:border-[#0b2c3d] transition-colors duration-300">
            <Image
              src="/images/logo/logo.jpeg"
              alt="KONNAK Engineering Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl font-extrabold tracking-wide text-[#0b2c3d] group-hover:text-green-600 transition-colors duration-300">
            KONNAK ENGINEERING
          </span>
        </Link>

        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative overflow-hidden px-5 py-2 text-white font-medium bg-[#0b2c3d] rounded-lg group shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="absolute inset-0 bg-green-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setDrawerOpen(true)}
          className="md:hidden text-[#0b2c3d]"
        >
          <Menu size={28} />
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg text-[#0b2c3d]">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-[#0b2c3d]"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setDrawerOpen(false)}
              className="px-4 py-2 rounded-lg bg-[#0b2c3d] text-white hover:bg-green-600 transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </nav>
  );
}
