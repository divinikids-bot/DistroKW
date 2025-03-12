import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/contexts/CartContext";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-black">
        <CartProvider>
          <Navbar />

          <main>
            {children}
          </main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
