"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";

export default function LatestProducts() {
  const products = [
    { title: "Qozlu-karamelli", price: "25.00 ₼", img: "/cake-karamel.jpg" },
    { title: "Şokoladlı paxlava", price: "36.00 ₼", img: "/paxlava-set.jpg" },
    { title: "Sezar Roll", price: "6.00 ₼", img: "/sezar-roll.jpg" },
    { title: "San Sebastyan (klassik)", price: "6.00 ₼", img: "/san-sebastian.jpg" },
  ];

  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // 🔥 RESPONSIVE visibleCount
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      if (width < 768) setVisibleCount(1); // Mobilde tek məhsul
      else if (width < 1024) setVisibleCount(2);
      else if (width < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };

    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateVisible, 100);
    };

    updateVisible();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1 >= products.length ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1 >= products.length ? 0 : prev + 1));
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 < 0 ? products.length - 1 : prev - 1));
  }, [products.length]);

  // Calculate maximum possible index
  const maxIndex = Math.max(0, products.length - visibleCount);

  // Ensure index stays within valid range
  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex, visibleCount]);

  const itemWidthPercent = 100 / visibleCount;

  return (
    <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-14 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 sm:mb-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
          Son Əlavə Edilənlər
          <div className="w-14 sm:w-16 h-1 bg-red-600 mt-2 rounded-full"></div>
        </h2>

        {/* Desktop buttons */}
        <div className="hidden sm:flex gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-xl border border-gray-300
                       bg-white flex items-center justify-center
                       hover:bg-gray-50 transition text-gray-700 shadow-sm
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Əvvəlki məhsul"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-xl border border-gray-300
                       bg-white flex items-center justify-center
                       hover:bg-gray-50 transition text-gray-700 shadow-sm
                       hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Növbəti məhsul"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div
          className="flex transition-all duration-500 ease-out"
          style={{
            transform: `translateX(-${index * itemWidthPercent}%)`,
          }}
        >
          {products.map((item, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 px-3 sm:px-2 transition-all duration-300"
              style={{ width: `${itemWidthPercent}%` }}
            >
              <div
                className="bg-white border border-gray-200
                           rounded-2xl shadow-sm overflow-hidden
                           hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                           h-full flex flex-col mx-auto"
                style={{ maxWidth: visibleCount === 1 ? "320px" : "none" }}
              >
                {/* Image */}
                <div className="w-full h-64 sm:h-56 md:h-64 lg:h-72 relative flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    priority={i < 2}
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800 text-center sm:text-left line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-red-700 font-bold text-lg text-center sm:text-left mt-auto">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile buttons & Indicators */}
      <div className="max-w-7xl mx-auto">
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 mb-4">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-red-600" : "bg-gray-300"
              }`}
              aria-label={`Məhsul ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile buttons */}
        <div className="flex sm:hidden justify-center gap-6 mt-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-full border border-gray-300
                       bg-white flex items-center justify-center
                       hover:bg-gray-50 transition text-gray-700 shadow-lg
                       hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Əvvəlki məhsul"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-full border border-gray-300
                       bg-white flex items-center justify-center
                       hover:bg-gray-50 transition text-gray-700 shadow-lg
                       hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            aria-label="Növbəti məhsul"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}