"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Cake, Home, Info, ShoppingBag, BookOpen, HelpCircle, Phone, Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <nav className={`${dark ? "dark" : ""}`}>
      <div
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md
          bg-white/60 dark:bg-[#1e1c1a]/70
          shadow-[0_4px_20px_rgba(0,0,0,0.06)]
          transition-all
        "
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <div className="flex items-center gap-2 text-gray-800 dark:text-[#ffe8c6] text-2xl font-semibold">
            <Cake size={26} className="text-red-600" />
            <span className="font-[serif] tracking-wide">Ravira</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 font-medium">

            <Link href="/" className="hover:text-red-600 transition flex items-center gap-1">
              <Home size={18} /> Ana səhifə
            </Link>

            <Link href="/haqqimizda" className="hover:text-red-600 transition flex items-center gap-1">
              <Info size={18} /> Haqqımızda
            </Link>

            <Link href="/mehsullar" className="hover:text-red-600 transition flex items-center gap-1">
              <ShoppingBag size={18} /> Məhsullar
            </Link>

            <Link href="/blog" className="hover:text-red-600 transition flex items-center gap-1">
              <BookOpen size={18} /> Bloq
            </Link>

            <Link href="/faq" className="hover:text-red-600 transition flex items-center gap-1">
              <HelpCircle size={18} /> FAQ
            </Link>

            <Link
              href="/elaqe"
              className="
                px-5 py-2 rounded-full 
                bg-red-600 text-white shadow-sm 
                hover:bg-red-700 transition flex items-center gap-2
              "
            >
              <Phone size={18} /> Əlaqə
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="hidden md:flex text-gray-800 dark:text-yellow-400 text-xl"
          >
            {dark ? <Sun /> : <Moon />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 dark:text-yellow-400 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 
            ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div
            className="
              flex flex-col gap-4 
              bg-white/70 dark:bg-[#26221f]/90 
              backdrop-blur-md 
              p-5 rounded-b-2xl
              text-gray-800 dark:text-gray-200
            "
          >
            <Link href="/" className="flex items-center gap-2 hover:text-red-600">
              <Home size={18} /> Ana səhifə
            </Link>

            <Link href="/haqqimizda" className="flex items-center gap-2 hover:text-red-600">
              <Info size={18} /> Haqqımızda
            </Link>

            <Link href="/mehsullar" className="flex items-center gap-2 hover:text-red-600">
              <ShoppingBag size={18} /> Məhsullar
            </Link>

            <Link href="/blog" className="flex items-center gap-2 hover:text-red-600">
              <BookOpen size={18} /> Bloq
            </Link>

            <Link href="/faq" className="flex items-center gap-2 hover:text-red-600">
              <HelpCircle size={18} /> FAQ
            </Link>

            <Link
              href="/elaqe"
              className="
                px-4 py-2 bg-red-600 text-white rounded-full 
                flex items-center gap-2 shadow-sm hover:bg-red-700 transition
              "
            >
              <Phone size={18} /> Əlaqə
            </Link>

            {/* Mobile Dark Mode Switch */}
            <button
              onClick={() => setDark(!dark)}
              className="mt-2 flex items-center gap-2 text-lg hover:text-red-500 transition"
            >
              {dark ? <Sun /> : <Moon />} 
              {dark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
