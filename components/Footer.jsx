"use client";
import { Mail, Phone, Info } from "lucide-react";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        relative pt-24 pb-10 
        text-[#f2ede7]
        bg-gradient-to-br from-[#1a1714] via-[#0e0d0c] to-[#1c1b19]
        overflow-hidden
      "
    >
      {/* Light Glow Behind */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#ffddc170] rounded-full blur-[160px] opacity-20"></div>
      </div>

      {/* TOP DECOR LINE */}
      <div className="relative w-full flex justify-center mb-14 z-10">
        <div className="border-t border-dotted border-[#ffffff26] w-3/4"></div>
      </div>

      {/* LOGO with Glow */}
      <div className="relative flex justify-center mb-16 z-10">
        <div className="relative">
          <img
            src="/logo.png"
            alt="Qalamoo Logo"
            className="w-44 opacity-[0.97] drop-shadow-[0_0_25px_rgba(255,200,150,0.3)] rounded-full"
          />

          {/* Aura Glow */}
          <div className="absolute inset-0 blur-3xl bg-[#ffbd8d30] rounded-full"></div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-6 z-10">
        
        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#f8f4ef]">
            SÜRƏTLİ KEÇİDLƏR
          </h3>
          <div className="h-[3px] w-16 bg-red-500/80 mb-6 rounded-full"></div>

          <ul className="space-y-4 text-[#d8d2ca]">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Info className="text-red-500" size={19} /> Ana Səhifə
            </Link>

            <Link
              href="/haqqimizda"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Info className="text-red-500" size={19} /> Haqqımızda
            </Link>

            <li className="flex items-center gap-2 hover:text-white transition">
              <Mail className="text-red-500" size={19} /> Ünvan
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#f8f4ef]">
            Əlaqə
          </h3>
          <div className="h-[3px] w-16 bg-red-500/80 mb-6 rounded-full"></div>

          <ul className="space-y-4 text-[#d8d2ca]">

            <li className="flex items-center gap-3 hover:text-white transition">
              <Phone className="text-red-500" size={19} />
              <a href="tel:+994502424766">
                +994 50 242 47 66
              </a>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <Mail className="text-red-500" size={19} /> qalamoo@mail.com
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <FaInstagram className="text-red-500" size={19} />
              <a
                href="https://www.instagram.com/qala.moo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center gap-3 hover:text-white transition">
              <FaTiktok className="text-red-500" size={19} />
              <a
                href="https://www.tiktok.com/@qalamoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>

        {/* BRAND MESSAGE */}
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-wide text-[#f8f4ef] leading-snug">
            SEVGİ İLƏ YARADILAN MƏHSULLAR,
            <br /> XOŞBƏXT ANLARA ÇEVRİLİR!
          </h3>
          <div className="h-[3px] w-16 bg-red-500/80 mb-6 rounded-full"></div>

          <p className="leading-relaxed text-[#cfc8bf] text-sm">
            Bizim üçün hər məhsul sadəcə şirniyyat deyil — bir hiss, bir sevinc anıdır.
            Sizin üçün hazırladığımız hər bir məhsul ailənizə isti bir xatirə qatır.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="relative mt-16 border-t border-[#272625] pt-6 px-8 flex flex-col md:flex-row justify-between text-sm text-[#c3bdb6] z-10">
        <p className="flex items-center gap-1">
          <span className="text-red-500 text-base">©</span>
          2025 Qalamoo — Bütün hüquqlar qorunur
        </p>
      </div>
    </footer>
  );
}
