"use client";

import React from "react";

export default function SummerDessertsGrid() {
  const handleWhatsAppOrder = (product) => {
    const message = `🛍️ *Sifariş:* ${product.title}\n💰 *Qiymət:* ${product.price}\n📏 *Ölçü:* ${product.category}\n\n🖼️ [Şəkil]`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/994502424766?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const products = [
    { title: "Dondurma", price: "2.50 ₼", category: "150 qram", img: "/ciy.jpg" },
    { title: "Buzlu Qeyd", price: "3.00 ₼", category: "200 qram", img: "/kiv.jpg" },
    { title: "Sorbet", price: "2.80 ₼", category: "150 qram", img: "/ag.jpg" },
   
    { title: "Melon Dondurmasi", price: "3.50 ₼", category: "200 qram", img: "/goy.jpg" },
    { title: "Çiyələk Dondurmasi", price: "3.50 ₼", category: "200 qram", img: "/dif.jpg" },
    { title: "Çokolad Buzlusu", price: "3.20 ₼", category: "150 qram", img: "/cox.jpg" },
    { title: "Meyveli Buzlu Tort", price: "4.00 ₼", category: "200 qram", img: "/pec.jpg" },
    { title: "Kokos Dondurmasi", price: "3.80 ₼", category: "150 qram", img: "/nig.jpg" },
{ title: "Kokos Dondurmasi", price: "3.80 ₼", category: "150 qram", img: "/mar.jpg" },
{ title: "Kokos Dondurmasi", price: "3.80 ₼", category: "150 qram", img: "/kr.jpg" },
{ title: "Kokos Dondurmasi", price: "3.80 ₼", category: "150 qram", img: "/bor.jpg" },
{ title: "Kokos Dondurmasi", price: "3.80 ₼", category: "150 qram", img: "/mat.jpg" },

  

  ];

  return (
    <div className="flex-1">

      {/* Header */}
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Yay Desertləri Sifarişlə Hazırlanır </h1><h3 className="text-3xl font-bold text-gray-900">Hər biri cəmi 7 ₼</h3>
        <p className="text-gray-600 text-sm tracking-wide">{products.length} nəticə</p>
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

            {/* Button Only */}
            <div className="p-6 flex justify-center">
              <button
                onClick={() => handleWhatsAppOrder(p)}
                className="
                  px-5 py-2.5 rounded-full
                  border border-green-600 text-green-600
                  bg-white hover:bg-green-600 hover:text-white
                  transition-all duration-300
                  shadow-sm hover:shadow-md
                  text-sm font-medium
                  flex items-center gap-2
                "
              >
                💬 Sifariş Et
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
