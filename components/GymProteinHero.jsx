"use client";

import Image from "next/image";

export default function GymProteinHero() {
  return (
    <section
      className="
        relative w-full min-h-[480px]
        flex items-center justify-center
        overflow-hidden rounded-3xl
        shadow-xl bg-black
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1400&q=80"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Fitness üçün <span className="text-red-500">Protein Enerji Desert</span>
          </h1>

          <p className="text-gray-300 text-lg">
            Yulaf, şəkərsiz kakao və təbii protein ilə hazırlanmış güc verən
            dietik şirniyyat.  
            İdman zalında məşqdən əvvəl və ya sonra enerji toplamaq üçün idealdır.
          </p>

          <button
            className="
              px-6 py-3 bg-red-600 hover:bg-red-700
              rounded-full text-white text-lg font-semibold
              shadow-md transition
            "
          >
            <a href="tel:+994502424766">Sifariş Et</a>
          </button>
        </div>

        {/* Right — Your Product Image */}
        <div className="flex justify-center">
          <div
            className="
              bg-white/10 backdrop-blur-md p-4 rounded-3xl
              shadow-xl border border-white/20
              transform hover:scale-105 transition duration-300
            "
          >
            <img
              src="/id.jpg"
              alt="Protein Sweet"
              className="w-72 h-72 object-cover rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
