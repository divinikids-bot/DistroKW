import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer"; // Import Footer

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen p-10">
        {/* Carousel */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Carousel />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-6">
          <div className="text-sm bg-amber-600 text-white px-3 py-1 rounded inline-block mb-4">
            Premium Quality
          </div>
          <h1 className="text-4xl font-bold mb-4">Oni👹</h1>
          <p className="text-lg mb-2">Dare to wear the power of Oni 👹</p>
          <p className="text-lg mb-4">Strength and fear in one tee.</p>
          <button className="border-2 border-white text-white px-6 py-2 mt-4 hover:bg-white hover:text-black transition">
            View Products
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
