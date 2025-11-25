"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/994502424766"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all"
      aria-label="WhatsApp ilə əlaqə"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  );
}
