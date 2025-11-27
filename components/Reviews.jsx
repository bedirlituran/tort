"use client";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      name: "Aysel Quliyeva",
      role: "Müştəri",
      text: "Qalamoo-nun hazırladığı şirniyyatlar sadəcə dadlı yox, həm də çox zövqlüdür. Xüsusilə paxlavaları mükəmməldir! Hər sifarişdə eyni keyfiyyət!",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Sabina Babayeva",
      role: "Daimi Müştəri",
      text: "Buradan sifariş etdiyim tortlar hər zaman təzə, yüngül və inanılmaz dərəcədə dadlı olur. Dostlarıma da tövsiyə etmişəm, hamı razıdır!",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elvin Məmmədov",
      role: "Ziyarətçi",
      text: "Şirniyyat seçimləri çox genişdir. Xüsusilə karamelli tort əfsanədir. Həm servis, həm dad — hər şey yüksək səviyyədədir!",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <section className="px-8 md:px-10 py-16">
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-10">
        Müştəri Rəyləri
        <div className="w-16 h-[3px] bg-red-600 mt-2 rounded-full"></div>
      </h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="
              bg-[#fffdfa]
              border border-[#e8e3d7]
              rounded-2xl p-7 shadow-sm
              hover:shadow-md hover:bg-[#fdf7f0]
              transition
            "
          >
            {/* AVATAR + NAME */}
            <div className="flex items-center gap-4 mb-5">
              <Image
                src={r.avatar}
                width={60}
                height={60}
                alt={r.name}
                className="rounded-full object-cover border border-[#e8e3d7]"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {r.name}
                </h3>
                <p className="text-sm text-red-700 font-medium">{r.role}</p>
              </div>
            </div>

            {/* TEXT */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
