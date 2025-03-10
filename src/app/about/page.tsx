"use client";

import Carousel from "@/components/Carousel"; // Carousel dengan gambar berbeda dari homepage

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10">
        {/* Carousel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Carousel images={["/about.jpg", "/about2.jpg", "/about3.jpg"]} />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-6">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            At <strong>Divine Clothing</strong>, fashion is more than just clothing—it’s a statement of identity, confidence, and creativity. 
            Founded with the vision of blending modern streetwear with cultural and artistic influences, we design apparel that speaks 
            to the bold, the fearless, and the trendsetters.
          </p>
          <p className="text-lg mb-4">
            Our journey started with a simple idea: to create high-quality, stylish, and unique pieces that allow individuals to express 
            their authentic selves. Every collection we release is crafted with attention to detail, using premium materials to ensure 
            comfort, durability, and a flawless fit.
          </p>
          <p className="text-lg mb-4">
            At Divine Clothing, we believe that fashion should be more than just fabric—it should empower and inspire. Our brand is for those 
            who dare to be different, who embrace their own divinity in style.
          </p>
          <button className="border-2 border-white text-white px-6 py-2 mt-4 hover:bg-white hover:text-black transition">
            Explore Our Collection
          </button>
        </div>
      </section>
    </div>
  );
}