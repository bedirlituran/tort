"use client";
import Image from "next/image";
import React from "react";

export default function CategoriesSection() {
  const items = [
    { title: "Tortlar", img: "/tortbg.png" },
    { title: "Desertlər", img: "/desert.png" },
    { title: "Paxlavalər", img: "/paxlava.jpg" },
    { title: "Bişmələr", img: "/bismeler.jpg" },
    { title: "Peçenyelər", img: "/pecenye.jpg" },
  ];

  return (
    <section className="relative w-full min-h-[650px] flex items-center justify-center text-white py-20">

      {/* Background collage */}
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        <p className="text-gray-200 text-lg mb-2 tracking-wide opacity-90">
          2012-ci ildən
        </p>

        <h1 className="text-4xl md:text-5xl font-[600] tracking-tight drop-shadow-lg mb-12">
          Sizinlə Bərabərik.
        </h1>

        {/* CIRCLES */}
        <div className="flex gap-10 flex-wrap justify-center mt-6">

          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center group">

              {/* Glassmorphism Circle */}
              <div
                className="
                w-28 h-28 md:w-32 md:h-32 rounded-full 
                overflow-hidden cursor-pointer
                border border-white/30 
                backdrop-blur-md bg-white/10
                shadow-[0_0_20px_rgba(255,255,255,0.15)]
                group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
                transition-all duration-300
              "
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              <p className="mt-3 text-sm md:text-base tracking-wide font-medium text-gray-100 group-hover:text-white transition">
                {item.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
