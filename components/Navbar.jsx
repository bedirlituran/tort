"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/mehsullar", label: "Məhsullar" },
  { href: "/blog", label: "Bloq" },
  { href: "/faq", label: "FAQ" },
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm">
              <Image src="/logo.jpg" alt="Qalamoo Logo" fill className="object-cover" />
            </div>
            <span className="text-2xl font-semibold tracking-wide text-[#5a4636] font-serif">
              Qalamoo
            </span>
          </div>
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[17px] font-medium text-[#6d5b4c]">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-red-600 transition">
                {link.label}
              </Link>
            ))}
            <Link
             href="tel:+994502424766"
  target="_blank"
  rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full bg-red-600 text-white shadow hover:bg-red-700 transition"
            >
              Əlaqə
            </Link>
          </div>
          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#6d5b4c] text-3xl"
            onClick={() => setOpen(true)}
            aria-label="Menyunu aç"
          >
            <Menu />
          </button>
        </div>
      </div>
      {/* MOBILE DRAWER MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#f7e7d1] shadow-xl transform transition-transform duration-300 z-[9999] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col gap-6 text-[#5a4636] bg-[#f7e7d1] shadow-xl">
          <button
            className="self-end text-3xl mb-4 text-[#5a4636]"
            onClick={() => setOpen(false)}
            aria-label="Menyunu bağla"
          >
            <X />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg hover:text-red-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
         <Link
  href="tel:+994502424766"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-auto px-4 py-2 bg-red-600 text-white rounded-full text-center hover:bg-red-700 transition"
  onClick={() => setOpen(false)}
>
  Əlaqə
</Link>

        </div>
      </div>
    </nav>
  );
}
