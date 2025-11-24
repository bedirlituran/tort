"use client";
import React from "react";
import { Check } from "lucide-react";

export default function CategoriesSidebar() {
  const items = [
    { name: "Tortlar", count: 20 },
    { name: "Desertlər", count: 18 },
    { name: "Paxlavalər", count: 21 },
    { name: "Peçenyelər", count: 11 },
    { name: "Fast Food", count: 7 },
    { name: "Bişmələr", count: 4 },
    { name: "Ravira Kafe (Bayıl)", count: null },
    { name: "Hədiyyə qutuları", count: null },
  ];

  return (
    <div
      className="
        w-full md:w-72 
        bg-[#fffdfa]
        rounded-2xl 
        shadow-sm 
        border border-[#e8e3d7]
        p-6 
        backdrop-blur-xl
      "
    >
      <h2
        className="
          text-2xl 
          font-semibold 
          mb-5 
          text-gray-800 
          tracking-tight
        "
      >
        Kateqoriyalar
      </h2>

      <div className="space-y-3">

        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex 
              justify-between 
              items-center 
              border-b 
              pb-3 
              border-[#eae6df]
              cursor-pointer
              hover:bg-[#f7f3ed] 
              rounded-md 
              px-2 
              transition
            "
          >
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Check size={18} className="text-red-500" />
              {item.name}
            </div>

            <span className="text-gray-500 font-light">
              {item.count ? `(${item.count})` : ""}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}
