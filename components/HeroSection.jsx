"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full min-h-[620px]
        flex flex-col md:flex-row items-center justify-center
        overflow-hidden
        bg-[#1f1a17]
      "
    >
      {/* BACKGROUND DECORATION GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a2f29] via-[#2a241f] to-[#1a1513] opacity-70" />

      {/* LIGHT SHINE EFFECT */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,200,180,0.3),transparent)]"></div>

      {/* LEFT IMAGE */}
      <div className="relative w-full md:w-1/2 h-[340px] md:h-full flex items-center justify-center z-10">
        <div
          className="
            relative 
            w-[80%] md:w-[78%] 
            aspect-square
            rounded-3xl
            shadow-[0_0_40px_rgba(0,0,0,0.4)]
            overflow-hidden
            transform hover:scale-[1.03] transition duration-500
          "
        >
          <Image
            src="/hero.jpg"
            alt="Şirniyyat"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* RIGHT TEXT */}
      <div className="relative z-10 w-full md:w-1/2 px-6 md:px-16 text-center md:text-left text-white py-10 md:py-0">
        <h1
          className="
            text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight
            drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]
          "
        >
          Şirin Dadların
          <br />
          <span className="text-[#ffdbc0]">
            Ən Zövqlü Ünvanı.
          </span>
        </h1>

        <p
          className="
            text-gray-200 mt-5 text-lg md:text-xl 
            max-w-md mx-auto md:mx-0 leading-relaxed
          "
        >
          Təzə hazırlanmış, premium tərkibli şirniyyatlar.
          Sənin üçün sevgi ilə bişirilir — hər qəlyanaltı bir zövq!
        </p>

        {/* BUTTON */}
        <button
          className="
            mt-10 px-7 py-3 rounded-full
            flex items-center gap-2 mx-auto md:mx-0
            bg-[#ff8b61] hover:bg-[#ff7744]
            text-white font-semibold text-lg
            shadow-[0_8px_25px_rgba(255,120,80,0.35)]
            hover:shadow-[0_12px_35px_rgba(255,120,80,0.5)]
            transition-all duration-300
            hover:scale-105 active:scale-95
          "
        >
         <a href="tel:+994502424766"> İndi Sifariş Ver</a> <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
