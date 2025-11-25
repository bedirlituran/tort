"use client";
import { Mail, Phone, Info, HelpCircle } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

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
          src="/logo.jpg"
          alt="Qalamoo Logo"
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
              <Phone className="text-red-500" size={19} /> 12345678
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <Mail className="text-red-500" size={19} /> qalamoo@mail.com
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaInstagram className="text-red-500" size={19} />
              <a href="https://www.instagram.com/qala.moo?igsh=MWtlbmY0ejB3aTRseA==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition">
              <FaTiktok className="text-red-500" size={19} />
              <a href="https://www.tiktok.com/@qalamoo?_r=1&_t=ZS-91fyxRZxpIX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                TikTok
              </a>
            </li>
          </ul>
        </div>
        {/* RIGHT TEXT */}
        <div>
          <h3 className="text-xl font-semibold mb-3 leading-snug tracking-wide">
            SEVGİ İLƏ YARADILAN MƏHSULLAR,
            <br /> XOŞBƏXT ANLARA ÇEVRİLİR!
          </h3>
          <div className="h-[3px] w-14 bg-red-600/80 mb-6 rounded-full"></div>
          <p className="leading-relaxed text-[#c8c2b9] text-sm">
            Bizim üçün hər məhsul sadəcə bir əşya deyil, bu bir hissdir.
            Sizin üçün hazırladığımız hər bir məhsul, bir ailəni, bir gülümsəməni,
            bir xüsusi anı tamamlayır.
          </p>
        </div>
      </div>
      {/* COPYRIGHT */}
      <div className="mt-16 border-t border-[#3a3937] pt-6 flex flex-col md:flex-row justify-between px-8 text-sm text-[#c7c2ba] gap-4">
        <p className="flex items-center gap-1">
          <span className="text-red-600 text-base">©</span>
          Müəllif hüququ 2025 <span className="text-red-500">Qalamoo</span> — Bütün hüquqlar qorunur
        </p>
      </div>
    
    </footer>
  );
}
