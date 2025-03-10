"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';
import Image from "next/image";
import { useCart } from "@/components/contexts/CartContext";

// ✅ Dynamic import buat react-icons
const FiSearch = dynamic(() => import('react-icons/fi').then(mod => mod.FiSearch), { ssr: false });
const FiShoppingBag = dynamic(() => import('react-icons/fi').then(mod => mod.FiShoppingBag), { ssr: false });

export default function Navbar() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // ✅ Klik di luar cart dropdown untuk nutup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  // ✅ Toggle buka/tutup cart dropdown saat icon cart diklik
  const toggleCartDropdown = () => {
    setIsCartDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative z-50">
      {/* Hamburger mobile */}
      <button
        className="text-2xl text-black font-bold p-2 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center space-x-6">
        <button onClick={() => router.push("/")} className="text-black font-semibold">
          HOME
        </button>

        <button onClick={() => router.push("/products")} className="text-black font-semibold">
          PRODUCTS
        </button>

        <button onClick={() => router.push("/about")} className="text-black font-semibold">
          ABOUT US
        </button>

        <button onClick={() => router.push("/contact")} className="text-black font-semibold">
          CONTACT
        </button>
      </nav>

      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="DivineClothing logo"
          width={150}
          height={500}
          className="h-10 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Search & Cart */}
      <div className="flex items-center space-x-6 relative">
        <FiSearch className="text-black text-xl cursor-pointer" />

        {/* Cart */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleCartDropdown}
            className="relative focus:outline-none"
          >
            <FiShoppingBag className="text-black text-xl cursor-pointer" />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full px-2 py-1">
                {cartCount}
              </span>
            )}
          </button>

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
                    <li key={item.id} className="py-2">
                      <div className="flex justify-between">
                        <p className="font-medium text-black">{item.name}</p>
                      </div>
                      <div className="text-xs text-black">
                        Qty: {item.quantity}
                      </div>
                      <div className="text-sm text-blue-600 font-semibold">
                        Rp {item.price.toLocaleString()} x {item.quantity} ={" "}
                        Rp {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Total */}
              {cartItems.length > 0 && (
                <>
                  <div className="mt-4 border-t pt-2 text-sm text-gray-600">
                    Total Item:{" "}
                    <span className="font-semibold text-black">
                      {cartCount}
                    </span>
                  </div>

                  <div className="flex justify-between mt-1 text-base text-black font-semibold">
                    <span>Total:</span>
                    <span className="text-green-600">
                      Rp{" "}
                      {cartItems
                        .reduce(
                          (total, item) => total + item.price * item.quantity,
                          0
                        )
                        .toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      router.push("/cart");
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

      {/* Overlay Mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
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
          onClick={() => router.push("/")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          HOME
        </button>

        <button
          onClick={() => router.push("/products")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          PRODUCTS
        </button>

        <button
          onClick={() => router.push("/about")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          ABOUT US
        </button>

        <button
          onClick={() => router.push("/contact")}
          className="block w-full text-left text-black font-semibold py-2"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
