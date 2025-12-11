"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/mehsullar", label: "Məhsullar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-xl bg-[#fff5eb]/70 shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-b border-[#f0e4d7] transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
          {/* LOGO */}
          <Link href="/" className="flex items-center cursor-pointer select-none">
            <img 
              src="/logo.jpg" 
              alt="Qalamoo" 
              className="h-18 sm:h-18 md:h-18 lg:h-22 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-[17px] font-medium text-[#6d5b4c]">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-red-600 transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+994502424766"
              className="ml-2 lg:ml-4 px-4 lg:px-5 py-2 rounded-full bg-red-600 text-white shadow hover:bg-red-700 transition"
            >
              Əlaqə
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#6d5b4c] p-2"
            onClick={() => setOpen(true)}
            aria-label="Menyunu aç"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/30 z-[9998] md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#f7e7d1] shadow-xl transform transition-transform duration-300 z-[9999] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col gap-6 text-[#5a4636]">
          <button
            className="self-end p-2 text-[#5a4636]"
            onClick={() => setOpen(false)}
            aria-label="Menyunu bağla"
          >
            <X size={28} />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg hover:text-red-600 transition py-2"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <Link
            href="tel:+994502424766"
            className="mt-auto px-4 py-3 bg-red-600 text-white rounded-full text-center hover:bg-red-700 transition font-medium"
            onClick={() => setOpen(false)}
          >
            Əlaqə
          </Link>
        </div>
      </div>
    </nav>
  );
}