"use client";

import { Mail, Phone, Info, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0d] text-[#e9e4dd] pt-20 pb-8 relative">

      {/* TOP DECOR LINE */}
      <div className="w-full flex justify-center mb-14">
        <div className="border-t border-dotted border-[#c2b8a8]/40 w-3/4"></div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-14">
        <img
          src="/ravira-logo.png"
          alt="Ravira Logo"
          className="w-40 opacity-95 drop-shadow"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-6">

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-wide">SÜRƏTLİ KEÇİDLƏR</h3>
          <div className="h-[3px] w-14 bg-red-600/80 mb-6 rounded-full"></div>

          <ul className="space-y-4 text-[#d7d2c9]">
            <li className="flex items-center gap-2 hover:text-white transition">
              <HelpCircle className="text-red-500" size={19} /> FAQ
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Info className="text-red-500" size={19} /> Haqqımızda
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Mail className="text-red-500" size={19} /> Ünvan
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-semibold mb-3 tracking-wide">Əlaqə</h3>
          <div className="h-[3px] w-14 bg-red-600/80 mb-6 rounded-full"></div>

          <ul className="space-y-4 text-[#d7d2c9]">
            <li className="flex items-center gap-3 hover:text-white transition">
              <Phone className="text-red-500" size={19} /> +994 70 247 30 40
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <Phone className="text-red-500" size={19} /> +994 12 539 83 86
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <Mail className="text-red-500" size={19} /> info@ravira.az
            </li>
          </ul>
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-xl font-semibold mb-3 leading-snug tracking-wide">
            SEVGİ İLƏ BİŞİRİLƏN DADLAR,
            <br /> XOŞBƏXT ANLARA ÇEVRİLİR!
          </h3>
          <div className="h-[3px] w-14 bg-red-600/80 mb-6 rounded-full"></div>

          <p className="leading-relaxed text-[#c8c2b9] text-sm">
            Bizim üçün bişirmək sadəcə iş deyil, bu bir hissdir.
            Sobamızdan çıxan hər dad bir ailəni, bir gülümsəməni,
            bir doğum gününü və ya sadəcə sevilən bir anı tamamlayır.
          </p>

          <img
            src="/paklava.png"
            alt="Pakhlava"
            className="w-56 mt-6 ml-auto opacity-95 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          />
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-[#3a3937] pt-6 flex flex-col md:flex-row justify-between px-8 text-sm text-[#c7c2ba] gap-4">
        <p className="flex items-center gap-1">
          <span className="text-red-600 text-base">©</span>
          Müəllif hüququ 2025 <span className="text-red-500">Ravira Bakery House</span> — Bütün hüquqlar qorunur
        </p>

        <p className="opacity-90">
          Təqdim edir <span className="text-red-500 font-semibold">AZERATECH</span> SOLUTIONS
        </p>
      </div>

      {/* SCROLL UP BUTTON */}
      <button className="
        w-12 h-12 fixed bottom-10 right-10 rounded-full 
        bg-red-600 text-white flex items-center justify-center 
        shadow-xl hover:bg-red-700 transition
      ">
        ↑
      </button>

    </footer>
  );
}
