import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/contexts/CartContext";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

// INI HARUS DIPANGGIL UNTUK DAPAT className-nya!
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <CartProvider>
          <Navbar />

          <main>
            {/* Contoh penggunaan font di sini */}
            <h1 className={`${bebasNeue.className} text-4xl text-center`}>
              Ini pakai font Bebas Neue!
            </h1>

            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
