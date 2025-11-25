"use client";
import Image from "next/image";
import { Cake, Heart, Star, Users, Clock, Leaf } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AboutUs() {
  return (
    <div className="bg-[#f9f5f0] min-h-screen py-12">
      {/* Header Banner */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src="/bg.png"
          alt="Qalamoo Şirniyyat Evi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center font-serif">
            Qalamoo Şirniyyat Evi
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-[#5a4636] font-serif">2012-ci ildən Sizinlə</h2>
            <p className="text-lg text-[#6d5b4c] leading-relaxed">
              Qalamoo – ən təzə, dadlı və keyfiyyətli şirniyyatları sizin üçün hazırlayan,
              ənənəvi dadları müasir yanaşma ilə birləşdirən peşəkar şirniyyat evidir.
              Hər bir məhsul sevgi, diqqət və yüksək keyfiyyətli inqrediyentlərlə hazırlanır.
            </p>
            <p className="text-lg text-[#6d5b4c] leading-relaxed">
              Tortlarımız, paxlavalarımız, peçenyelərimiz və desertlərimiz sıradan bir 
              şirniyyat deyil – hər biri sizin üçün hazırlanmış xüsusi bir xatirədir.
            </p>
          </div>

          <div className="md:w-1/2">
            <Image
              src="/san-sebastian.jpg"
              alt="Qalamoo Şirniyyatları"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold text-center text-[#5a4636] mb-12 font-serif">
          Niyə Məhz Qalamoo?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-10 h-10 text-red-600" />,
              title: "Sevgi ilə Bişirilir",
              desc: "Bütün məhsullarımız sevgi, səliqə və yüksək diqqətlə hazırlanır.",
            },
            {
              icon: <Leaf className="w-10 h-10 text-green-600" />,
              title: "Təbii İnqrediyentlər",
              desc: "Kimyəvi qatqısız, təbii və keyfiyyətli məhsullardan istifadə edirik.",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: "Müştəri Məmnuniyyəti",
              desc: "Sizin məmnunluğunuz bizim üçün hər şeydən önəmlidir.",
            },
            {
              icon: <Star className="w-10 h-10 text-yellow-500" />,
              title: "Yüksək Keyfiyyət",
              desc: "Bütün məhsullarımız keyfiyyət standartlarına uyğun şəkildə hazırlanır.",
            },
            {
              icon: <Clock className="w-10 h-10 text-purple-600" />,
              title: "Təzə və Vaxtında",
              desc: "Məhsullar hər zaman təzə hazırlanır və vaxtında çatdırılır.",
            },
            {
              icon: <Cake className="w-10 h-10 text-orange-500" />,
              title: "Geniş Məhsul Seçimi",
              desc: "Tortlar, desertlər, paxlavalar və daha çoxunu təklif edirik.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-[#f9f5f0] rounded-lg">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#5a4636] mb-2">{item.title}</h3>
              <p className="text-[#6d5b4c]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

   

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center bg-[#e8d5c4] rounded-xl">
        <h2 className="text-3xl font-bold text-[#5a4636] mb-4 font-serif">Qalamoo Dadını Siz də Kəşf Edin</h2>

        <p className="text-lg text-[#6d5b4c] mb-8 max-w-2xl mx-auto">
          Şirniyyatlarımızla tanış olmaq və ya xüsusi sifariş vermək üçün bizimlə əlaqə saxlayın.
          Hər bir məhsul sizin üçün xüsusi hazırlanır!
        </p>

        <a
          href="tel:+994502424766"
          className="inline-block px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition"
        >
          İndi Zəng Edin
        </a>
      </div>
      <WhatsAppButton/>
    </div>
  );
}
