"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCart } from "@/components/contexts/CartContext";

// Dynamic import ikon biar ga berat waktu server-side render
const FiShoppingBag = dynamic(
  () => import("react-icons/fi").then((mod) => mod.FiShoppingBag),
  { ssr: false }
);

export default function Navbar() {
  const router = useRouter();

  // Cart Context
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  // Ref buat klik di luar elemen dropdown
  const cartDropdownRef = useRef<HTMLDivElement>(null);

  // Tutup cart dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCartDropdownOpen(false);
      }
    };

    if (isCartDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartDropdownOpen]);

  // Function handler
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // auto-close menu kalau lagi mobile
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative z-50">
      {/* MOBILE MENU BUTTON */}
      <button
        className="text-2xl text-black font-bold p-2 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* DESKTOP MENU */}
      <nav className="hidden md:flex items-center space-x-6">
        <button onClick={() => handleNavigate("/")} className="text-black font-semibold">HOME</button>
        <button onClick={() => handleNavigate("/products")} className="text-black font-semibold">PRODUCTS</button>
        <button onClick={() => handleNavigate("/about")} className="text-black font-semibold">ABOUT US</button>
        <button onClick={() => handleNavigate("/contact")} className="text-black font-semibold">CONTACT</button>
        <button onClick={() => handleNavigate("/teams")} className="text-black font-semibold">TEAMS</button>
      </nav>

      {/* LOGO */}
      <div>
        <Image
          src="/logo.png"
          alt="DivineClothing logo"
          width={150}
          height={500}
          className="h-10 cursor-pointer object-contain"
          onClick={() => handleNavigate("/")}
        />
      </div>

      {/* CART ICON & DROPDOWN */}
      <div className="flex items-center space-x-6 relative">
        <div className="relative" ref={cartDropdownRef}>
          <button onClick={toggleCartDropdown} className="relative focus:outline-none">
            <FiShoppingBag className="text-black text-xl cursor-pointer" />

            {/* CART COUNT BADGE */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* DROPDOWN KERANJANG */}
          {isCartDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg border rounded p-4 z-50">
              <h3 className="font-semibold mb-3 text-black flex items-center gap-2">
                <FiShoppingBag className="text-black" /> Keranjang
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-sm text-black">Keranjang kosong</p>
              ) : (
                <ul className="divide-y divide-black max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <li
                      key={`${item.id}-${item.size || "nosize"}-${item.color || "nocolor"}`}
                      className="py-2"
                    >
                      <div className="flex justify-between">
                        <p className="font-medium text-black">{item.name}</p>
                      </div>
                      <div className="text-xs text-black">
                        Qty: {item.quantity}{" "}
                        {item.size && `| Size: ${item.size}`}{" "}
                        {item.color && `| Color: ${item.color}`}
                      </div>
                      <div className="text-sm text-blue-600 font-semibold">
                        Rp {item.price.toLocaleString()} x {item.quantity} = Rp{" "}
                        {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* TOTAL & BUTTON */}
              {cartItems.length > 0 && (
                <>
                  <div className="mt-4 border-t pt-2 text-sm text-gray-600">
                    Total Item:{" "}
                    <span className="font-semibold text-black">{cartCount}</span>
                  </div>

                  <div className="flex justify-between mt-1 text-base text-black font-semibold">
                    <span>Total:</span>
                    <span className="text-green-600">
                      Rp{" "}
                      {cartItems
                        .reduce((total, item) => total + item.price * item.quantity, 0)
                        .toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      handleNavigate("/cart");
                      setIsCartDropdownOpen(false);
                    }}
                    className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                  >
                    Lihat Keranjang
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* OVERLAY KETIKA MOBILE MENU BUKA */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-md p-4 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-2xl mb-4"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        <button
          onClick={() => handleNavigate("/")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          HOME
        </button>
        <button
          onClick={() => handleNavigate("/products")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          PRODUCTS
        </button>
        <button
          onClick={() => handleNavigate("/about")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          ABOUT US
        </button>
        <button
          onClick={() => handleNavigate("Teams")}
            className="block w-full text-left text-black font-semibold py-2"
          >
            TEAMS
        </button>
        <button
          onClick={() => handleNavigate("/contact")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
