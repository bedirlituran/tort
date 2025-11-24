"use client";

import React from "react";

export default function ProductGrid() {
 const products = [
  {
    title: "Tiramisu",
    price: "35.00 ₼",
    category: "Tortlar",
    img: "/tiramitsu.jpg",
  },
  {
    title: "Kəsmikli-moruqlu",
    price: "29.00 ₼",
    category: "Tortlar",
    img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Spartak",
    price: "25.00 ₼",
    category: "Tortlar",
    img: "/spartak.jpg",
  },
];


  return (
    <div className="flex-1">

      {/* Header */}
      <div className="flex justify-between mb-8">
        <p className="text-gray-600 text-sm tracking-wide">
          20 nəticədən 1–12
        </p>

        <select
          className="
            px-3 py-2 text-sm rounded-xl
            bg-[#fffdfa] border border-[#e8e3d7]
            shadow-sm outline-none
            focus:border-red-500 transition
          "
        >
          <option>Default Sıralama</option>
          <option>Ucuzdan bahaya</option>
          <option>Bahadan ucuza</option>
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((p, i) => (
          <div
            key={i}
            className="
              bg-[#fffdfa]
              border border-[#e8e3d7]
              rounded-2xl shadow-sm
              overflow-hidden hover:shadow-md
              transition
            "
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover rounded-b-none"
            />

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {p.title}
              </h3>

              <p className="text-red-700 text-sm mt-1">{p.category}</p>

              <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                Şəkildəki yazılar bura əlavə edilir…
              </p>

              <div className="mt-6 flex justify-between items-center">
                <span className="text-red-700 font-semibold text-xl">
                  {p.price}
                </span>

                <button
                  className="
                    px-4 py-2 rounded-full
                    border border-red-600 text-red-600
                    bg-white hover:bg-red-50
                    transition shadow-sm
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
