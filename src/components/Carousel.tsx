"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/kaos.jpg",
  "/kaos2.jpg",
  "/kaos3.jpg"
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Gambar */}
      <div className="relative flex justify-center items-center">
        <Image 
          src={images[current]} 
          alt={`Slide ${current + 1}`} 
          width={500} 
          height={300} 
          className="rounded-lg object-cover"
        />
      </div>

      {/* Arrow Kiri */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Arrow Kanan */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}
