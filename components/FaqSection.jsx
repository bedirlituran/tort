"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const faqData = [
    {
      q: "Tortlarınız neçə gün təzə qalır?",
      a: "Təbii məhsullarla hazırlandığı üçün tortlarımız soyuducuda 48-72 saat ərzində tam təzə qalır.",
    },
    {
      q: "Sifarişi neçə saat öncədən vermək lazımdır?",
      a: "Sadə tortlar üçün 3-5 saat, xüsusi dizaynlı tortlar üçün isə 24 saat əvvəl sifariş qəbul edilir.",
    },
    {
      q: "Paxlavalarınız ev şəraitindədirmi?",
      a: "Bəli, bütün paxlavalar tam ev üsulu reseptlə, təbii yağ və yüksək keyfiyyətli içliklə hazırlanır.",
    },
    {
      q: "Kuryer xidməti varmı?",
      a: "Bəli, Bakı daxilində operativ kuryer çatdırılma xidməti mövcuddur.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="px-8 md:px-12 py-16">

      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-800 tracking-tight">
        Tez-tez verilən suallar
        <div className="w-14 h-[3px] bg-red-600 mt-2 rounded-full"></div>
      </h2>

      <div className="space-y-4">
        {faqData.map((f, i) => (
          <div
            key={i}
            onClick={() => setOpen(open === i ? null : i)}
            className="
              bg-[#fffdfa]
              border border-[#e8e3d7]
              rounded-xl
              p-5 
              shadow-sm
              cursor-pointer
              transition-all
              hover:shadow-md
              hover:bg-[#fdf7f0]
            "
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg md:text-xl font-medium text-gray-800">
                {f.q}
              </h3>

              <ChevronDown
                className={`
                  text-gray-600 transition-transform duration-300 
                  ${open === i ? "rotate-180" : ""}
                `}
              />
            </div>

            {/* Answer */}
            <div
              className={`
                overflow-hidden transition-all duration-300 
                ${open === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p className="text-gray-600 leading-relaxed">
                {f.a}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
