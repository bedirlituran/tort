"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full min-h-[580px] 
        bg-gradient-to-br from-[#1a1715] via-[#221f1c] to-[#2d2824]
        flex flex-col md:flex-row items-center justify-center
        overflow-hidden
      "
    >

<div className="relative w-full md:w-1/2 h-[300px] md:h-full flex items-center justify-center">
  <div className="relative w-[85%] md:w-[80%] aspect-[1/1]">
    <Image
      src="/des2.png"
      alt="Sweet Desserts"
      fill
      className="object-contain z-999"
    />
  </div>
</div>


      {/* RIGHT TEXT */}
      <div className="w-full md:w-1/2 px-10 md:px-16 text-center md:text-left text-white">
        <h2
          className="
            text-4xl md:text-5xl font-semibold leading-snug
            font-[serif]
            drop-shadow-lg
          "
        >
          Şirin Dadların Ünvanı
          <br />
          <span className="font-[serif]">Elə Buradır.</span>
        </h2>

        <p className="text-gray-300 mt-4 text-base md:text-lg max-w-md">
          Təzə, sevilən və sevgi ilə hazırlanmış şirniyyatların əsl ünvanı.
          Keyfiyyət və dad — bir arada!
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-10 px-7 py-3 rounded-full border border-white/40
            text-white flex items-center gap-2
            hover:bg-white/15 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            backdrop-blur-sm transition-all tracking-wide 
          "
        >
          İndi Sifariş Ver <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
