"use client"
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(2); // Jumlah item dalam keranjang

  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Kiri: Menu & Navigasi */}
      <nav className="flex items-center space-x-6">
        <button className="text-2xl font-bold">☰</button>
        <a href="#" className="text-black font-semibold">HOME</a>
        <div className="relative group">
          <a href="#" className="text-black font-semibold flex items-center">
            PRODUCT <span className="ml-1">▼</span>
          </a>
          {/* Dropdown */}
          <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md p-2">
            <a href="#" className="block px-4 py-2 text-black">T-shirt</a>
            <a href="#" className="block px-4 py-2 text-black">Outerwaer</a>
          </div>
        </div>
        <a href="#" className="text-black font-semibold">ABOUT US</a>
        <a href="#" className="text-black font-semibold">CONTACT</a>
      </nav>

      {/* Tengah: Logo */}
      <div>
        <img src="/logo.png" alt="DivineClothing logo" className="h-10" />
      </div>

      {/* Kanan: Ikon Pencarian & Keranjang */}
      <div className="flex items-center space-x-6">
        <FiSearch className="text-black text-xl cursor-pointer" />
        <div className="relative">
          <FiShoppingBag className="text-black text-xl cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full px-2 py-1">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
