import Carousel from "@/components/Carousel";
import Link from "next/link";
import RandomItems from "@/components/randomitems";
import TestimonialCarousel from "@/components/testimonial";

export default function Home() {
  const homeImages = ["/kaos.jpg", "/kaos2.jpg", "/kaos3.jpg"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
        <div className="w-full md:w-1/2 flex justify-center">
          <Carousel images={homeImages} />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <div className="text-sm bg-amber-600 text-white px-3 py-1 rounded inline-block mb-4">
            Premium Quality
          </div>
          <h1 className="text-4xl font-bold mb-4">Oni 👹</h1>
          <p className="text-lg mb-2">Dare to wear the power of Oni 👹</p>
          <p className="text-lg mb-2">
            Strength and fear in one tee. Channel the fierce spirit of the legendary Oni demon—symbols of raw strength, mystery, and fearlessness.
            This premium tee combines bold design with a dark, captivating energy that turns heads and commands respect. Are you ready to unleash your inner Oni?</p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/products">
              <button className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition">
                View More Products
              </button>
            </Link>
            <Link href="/about">
              <button className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TAGLINE */}
      <div className="text-center mt-16 px-6">
        <h2 className="text-5xl md:text-6xl tracking-wide text-amber-500 drop-shadow-md bebas">
          Unleash Your Inner Hero
        </h2>
      </div>

      {/* RANDOM ITEMS SECTION */}
      <div className="mt-12 md:mt-16">
        <RandomItems />
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="mt-16">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
