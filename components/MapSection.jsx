"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function MapSection() {
  return (
    <section className="px-8 md:px-12 py-16">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-10">
        Bizim Ünvan
        <div className="w-16 h-[3px] bg-red-600 mt-2 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* INFO CARD */}
        <div
          className="
            bg-[#fffdfa]
            border border-[#e8e3d7]
            rounded-2xl shadow-sm
            p-8
            flex flex-col gap-6
            justify-center
            hover:shadow-md hover:bg-[#fdf7f0]
            transition
          "
        >
          <div className="flex items-start gap-3">
            <MapPin className="text-red-600" size={22} />
            <p className="text-gray-700 leading-relaxed">
              Bayıl qəsəbəsi, Xəqani Rüstəmov küçəsi  
              <br /> Bakı, Azərbaycan
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="text-red-600" size={20} />
            <p className="text-gray-700">+994 70 247 30 40</p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-red-600" size={20} />
            <p className="text-gray-700">info@ravira.az</p>
          </div>
        </div>

        {/* GOOGLE MAP */}
        <div className="rounded-2xl overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.162159651056!2d49.82977477588538!3d40.35526337145066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030800def00f7c7%3A0x5058e141e58aab6a!2sBayil!5e0!3m2!1sen!2saz!4v1714500000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
