import Carousel from "@/components/Carousel";
import Link from "next/link";
import RandomItems from "@/components/randomitems";

export default function Home() {
  // Gambar khusus untuk homepage
  const homeImages = [
    "/kaos.jpg",
    "/kaos2.jpg",
    "/kaos3.jpg",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
        {/* Carousel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Carousel images={homeImages} />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-6 md:mt-0">
          <div className="text-sm bg-amber-600 text-white px-3 py-1 rounded inline-block mb-4">
            Premium Quality
          </div>
          <h1 className="text-4xl font-bold mb-4">Oni 👹</h1>
          <p className="text-lg mb-2">Dare to wear the power of Oni 👹</p>
          <p className="text-lg mb-4">Strength and fear in one tee.</p>
          <Link href="/products">
            <button className="border-2 border-white text-white px-6 py-2 mt-4 hover:bg-white hover:text-black transition">
              View More Products
            </button>
          </Link>
        </div>
      </section>

      {/* Komponen Produk Random */}
      <div className="mt-[-50px] md:mt-[-80px]">
        <RandomItems />
      </div>
    </div>
  );
}
