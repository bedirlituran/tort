"use client";

import React from "react";

export default function ProductGrid() {
  const products = [
    { title: "Teramisu", price: "5.00 ₼", category: "200 qram", img: "/tiramitsu.jpg" },
    { title: "Trayfl", price: "3.8 ₼", category: "180 qram", img: "/tray.jpg" },
    { title: "Profitrol", price: "3.8 ₼", category: "180 qram", img: "/profitrol.jpg" },
    { title: "Meyveli və şokaladlı cheesecake", price: "5.00 ₼", category: "200 qram", img: "/meyveli.jpg" },
    { title: "Sansebastian", price: "5.00 ₼", category: "200 qram", img: "/sansebastian.jpg" },
    { title: "Ballı tort", price: "5.00 ₼", category: "200 qram", img: "/balli.jpg" },
    { title: "Üç şokalad tortu", price: "5.00 ₼", category: "200 qram", img: "/uc.jpg" },
    { title: "Trufell tortu", price: "5.00 ₼", category: "200 qram", img: "/truf.jpg" },
    { title: "Roşen tortu", price: "5.00 ₼", category: "200 qram", img: "/ros.jpg" },
    { title: "Eskimo", price: "5.00 ₼", category: "200 qram", img: "/eski.jpg" },
    { title: "Şokoladlı sansebastian", price: "5.00 ₼", category: "200 qram", img: "/sokoladli.jpg" },
    { title: "Redvelvet", price: "4.00 ₼", category: "200 qram", img: "/red.jpg" }
  ];

  return (
    <div className="flex-1">

      {/* Header */}
      <div className="flex justify-between mb-8">
        <p className="text-gray-600 text-sm tracking-wide">20 nəticədən 1–12</p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="
              bg-[#fffdfa]
              border border-[#e8e3d7]
              rounded-3xl 
              shadow-sm hover:shadow-xl
              transition-all duration-300
              overflow-hidden
              hover:-translate-y-1
            "
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="
                  w-full h-100s object-cover
                  transition-all duration-300
                  hover:scale-105
                "
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                {p.title}
              </h3>

              <p className="text-red-700 text-sm font-medium mt-1">
                {p.category}
              </p>

              {/* Price + Button */}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-red-700 font-bold text-2xl">
                  {p.price}
                </span>

                <button
                  className="
                    px-5 py-2.5 rounded-full
                    border border-red-600 text-red-600
                    bg-white hover:bg-red-600 hover:text-white
                    transition-all duration-300
                    shadow-sm hover:shadow-md
                    text-sm font-medium
                  "
                >
                  Səbətə Əlavə Et
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
