"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Karinabluuu",
    role: "Customer",
    image: "/karina.jpg",
    message: "Kaosnya nyaman banget dipakai, desainnya juga unik! Bakal repeat order lagi",
  },
  {
    name: "Aerichandesuu",
    role: "Customer",
    image: "/aerichan.jpg",
    message: "Kualitas sablon dan bahan kaosnya premium. Gak kalah sama brand luar",
  },
  {
    name: "WinterMin-jongg",
    role: "Customer",
    image: "/winter.jpg",
    message: "Pengiriman cepat, pelayanan ramah. Pokoknya recommended banget",
  },
  {
    name: "imnotningning",
    role: "Customer",
    image: "/ningning.jpg",
    message: "Sangat puas dengan pelayanan dan kualitas produk dari DivineClothing",
  },
  {
    name: "ShinRyujin",
    role: "Customer",
    image: "/ryujin.jpg",
    message: "Desain kekinian, bahan adem, dan harga terjangkau. Suka banget belanja di sini",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-White">
        Testimonial by our divine sucsessor
      </h2>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 relative">
        <div className="flex flex-col items-center">
          <Image
            src={testimonials[index].image}
            alt={testimonials[index].name}
            width={80}
            height={80}
            className="rounded-full mb-4 object-cover"
          />
          <p className="text-center text-gray-700 mb-6 italic">
            "{testimonials[index].message}"
          </p>
          <h3 className="font-semibold text-black">{testimonials[index].name}</h3>
          <span className="text-sm text-gray-500">{testimonials[index].role}</span>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-black" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
