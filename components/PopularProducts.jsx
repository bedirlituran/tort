"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

export default function PopularProducts() {
  const products = [
    {
      title: "Şokaladli sansebastian",
      desc: "200 qr",
      price: "5.00 ₼",
      img: "/sokoladli.jpg",
    },
    {
      title: "Ballı",
      desc: "Ballı tort (Medovik) – təbii bal əsasında hazırlanan ...",
      price: "5.00 ₼",
      img: "/balli.jpg",
    },
    {
      title: "Eskimo",
      desc: "200 qr",
      price: "5.00 ₼",
      img: "/eski.jpg",
    },
    {
      title: "Roşen tortu",
      desc: " 200 qr",
      price: "5.00 ₼",
      img: "/ros.jpg",
    },
    {
      title: "Trufell tortu",
      desc: "200 qr",
      price: "5.00 ₼",
      img: "/truf.jpg",
    },
    {
      title: "Üç şokalad tortu",
      desc: "200 qr",
      price: "5.00 ₼",
      img: "/uc.jpg",
    },
  ];

  return (
    <section className="px-8 md:px-10 py-16">

      {/* HEADER */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-8">
        Məşhur Məhsullar
        <div className="w-14 h-[3px] bg-red-600 mt-2 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* LEFT PRODUCT LIST */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-7">
          {products.map((p, i) => (
            <div
              key={i}
              className="
                bg-[#fffdfa]
                border border-[#e8e3d7]
                p-4 rounded-2xl shadow-sm
                hover:shadow-md hover:bg-[#fdf7f0]
                transition flex items-center justify-between gap-4
              "
            >
              {/* LEFT TEXT */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{p.desc}</p>
                <p className="text-red-700 font-semibold mt-3">{p.price}</p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-40 h-24 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />

                {/* PLUS BUTTON
                <button
                  className="
                    absolute bottom-2 right-2 w-7 h-7 rounded-lg
                    bg-white/80 backdrop-blur-md
                    flex items-center justify-center
                    shadow-md hover:bg-white transition
                  "
                >
                  <Plus size={15} className="text-gray-700" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT LARGE IMAGE */}
        <div className="flex justify-center">
          <Image
            src="/des.png"
            alt="Popular Banner"
            width={450}
            height={600}
            className="
              rounded-3xl object-cover shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            "
          />
        </div>

      </div>
    </section>
  );
}
