"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function LatestProducts() {
  const products = [
    { title: "Qozlu-karamelli", price: "25.00 ₼", img: "/cake-karamel.jpg" },
    { title: "Şokoladlı paxlava", price: "36.00 ₼", img: "/paxlava-set.jpg" },
    { title: "Sezar Roll", price: "6.00 ₼", img: "/sezar-roll.jpg" },
    { title: "San Sebastyan (klassik)", price: "6.00 ₼", img: "/san-sebastian.jpg" },
    { title: "Sezar Roll", price: "6.00 ₼", img: "/sezar-roll.jpg" },
    { title: "San Sebastyan (klassik)", price: "6.00 ₼", img: "/san-sebastian.jpg" },
  ];

  const visibleCount = 4;
  const [index, setIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 2200);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1 >= products.length ? 0 : prev + 1));

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 < 0 ? products.length - 1 : prev - 1));

  return (
    <section className="px-8 py-14">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
          Son Əlavə Edilənlər
          <div className="w-16 h-[3px] bg-red-600 mt-2 rounded-full"></div>
        </h2>

        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="
              w-10 h-10 rounded-xl border border-white/20
              bg-white/10 backdrop-blur-md
              flex items-center justify-center
              hover:bg-white/20 transition
              text-white shadow
            "
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="
              w-10 h-10 rounded-xl border border-white/20
              bg-white/10 backdrop-blur-md
              flex items-center justify-center
              hover:bg-white/20 transition
              text-white shadow
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-all duration-700 ease-[cubic-bezier(.33,.66,.66,1)]"
          style={{
            width: `${products.length * (100 / visibleCount)}%`,
            transform: `translateX(-${(index * 100) / visibleCount}%)`,
          }}
        >
          {products.map((item, i) => (
            <div key={i} className="w-1/4 p-3 shrink-0">
              <div
                className="
                  bg-[#fffdfa]
                  border border-[#e8e3d7]
                  rounded-2xl shadow-sm
                  overflow-hidden
                  hover:shadow-md transition
                "
              >
                {/* Image */}
                <div className="w-full h-72 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-red-700 mt-1 font-medium">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
