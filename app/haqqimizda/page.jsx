"use client";
import Image from "next/image";
import { Cake, Heart, Star, Users, Clock, Leaf } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-[#f8f3ea] via-[#f4ebe1] to-[#efe4d7] min-h-screen py-12">

      {/* Header Banner */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1600&q=80"
          alt="Qalamoo Şirniyyat Evi"
          fill
          className="object-cover scale-105"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center font-serif drop-shadow-xl">
            Qalamoo Şirniyyat Evi
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">
          
          {/* Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#5a4636] font-serif">
              2012-ci ildən Sizinlə
            </h2>

            <p className="text-lg text-[#6d5b4c] leading-relaxed">
              Qalamoo – ən təzə, dadlı və keyfiyyətli şirniyyatları sizin üçün hazırlayan,
              ənənəvi dadları müasir yanaşma ilə birləşdirən peşəkar şirniyyat evidir.
            </p>

            <p className="text-lg text-[#6d5b4c] leading-relaxed">
              Tortlarımız, paxlavalarımız və desertlərimiz sadəcə şirniyyat deyil — 
              sizin üçün hazırlanmış xüsusi xatirələrdir.
            </p>
          </div>

          {/* Unsplash IMAGE */}
          <div className="md:w-1/2">
            <div className="rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition duration-500">
              <Image
                src="/bg2.png"
                alt="Qalamoo Şirniyyatları"
                width={700}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md border border-[#e6dacd]">
        <h2 className="text-3xl font-bold text-center text-[#5a4636] mb-14 font-serif">
          Niyə Məhz Qalamoo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Heart className="w-12 h-12 text-red-600" />,
              title: "Sevgi ilə Bişirilir",
              desc: "Bütün məhsullarımız sevgi və yüksək diqqətlə hazırlanır.",
            },
            {
              icon: <Leaf className="w-12 h-12 text-green-600" />,
              title: "Təbii İnqrediyentlər",
              desc: "Kimyəvi qatqısız, təbii və keyfiyyətli inqrediyentlər istifadə edirik.",
            },
            {
              icon: <Users className="w-12 h-12 text-blue-600" />,
              title: "Müştəri Məmnuniyyəti",
              desc: "Sizin məmnuniyyətiniz bizim üçün prioritetdir.",
            },
            {
              icon: <Star className="w-12 h-12 text-yellow-500" />,
              title: "Yüksək Keyfiyyət",
              desc: "Bütün məhsullarımız premium keyfiyyət standartlarına uyğundur.",
            },
            {
              icon: <Clock className="w-12 h-12 text-purple-600" />,
              title: "Təzə və Vaxtında",
              desc: "Məhsullar hər zaman təzə hazırlanıb vaxtında çatdırılır.",
            },
            {
              icon: <Cake className="w-12 h-12 text-orange-500" />,
              title: "Geniş Seçim",
              desc: "Tortlar, dessertlər, paxlavalar və daha çox çeşid.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center p-8
                bg-[#faf6f0] rounded-xl shadow hover:shadow-lg
                transition-all duration-300
              "
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#5a4636] mb-2">
                {item.title}
              </h3>
              <p className="text-[#6d5b4c]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center bg-gradient-to-r from-[#e8d5c4] to-[#f0dfd2] rounded-2xl shadow-xl mt-16">
        <h2 className="text-3xl font-bold text-[#5a4636] mb-4 font-serif drop-shadow">
          Qalamoo Dadını Siz də Kəşf Edin
        </h2>

        <p className="text-lg text-[#6d5b4c] mb-8 max-w-2xl mx-auto">
          Şirniyyatlarımızla tanış olun və ya xüsusi sifariş üçün bizimlə əlaqə saxlayın.
        </p>

        <a
          href="tel:+994502424766"
          className="
            inline-block px-10 py-4 bg-red-600 text-white rounded-full 
            font-semibold hover:bg-red-700 transition shadow-md hover:shadow-lg
          "
        >
          İndi Zəng Edin
        </a>
      </div>

      <WhatsAppButton />
    </div>
  );
}
