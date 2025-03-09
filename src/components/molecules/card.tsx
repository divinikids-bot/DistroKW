"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/components/contexts/CartContext";

interface CardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  stock: number;
  imageUrl?: string;
}

export default function Card({
  id,
  name,
  category,
  description,
  price,
  stock,
  imageUrl,
}: CardProps) {
  const fallbackImage = "https://via.placeholder.com/300x400?text=No+Image";
  const { addToCart } = useCart();

  // State untuk menyimpan ukuran yang dipilih user
  const [selectedSize, setSelectedSize] = useState("M");

  const handleAddToCart = () => {
    // Tambahkan item ke cart, sertakan image dan size
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image: imageUrl || fallbackImage, // pastikan gambar dikirim
      size: selectedSize, // pastikan size dikirim
    });

    console.log(`${name} (size ${selectedSize}) berhasil ditambahkan ke keranjang!`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        {/* Gambar produk */}
        <Image
          src={imageUrl || fallbackImage}
          alt={name}
          width={300}
          height={400}
          unoptimized
          className="object-cover w-full h-48 mb-4 rounded"
        />

        {/* Informasi produk */}
        <h3 className="text-lg text-black font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Kategori: {category}</p>
        <p className="text-sm text-gray-500">{description || "Tidak ada deskripsi"}</p>
        <p className="text-sm text-gray-500">Stok: {stock}</p>
        <p className="font-bold text-blue-500 mt-2">Rp {price.toLocaleString()}</p>

        {/* Pilih ukuran */}
        <div className="mt-2">
          <label
            htmlFor={`size-${id}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Pilih Ukuran:
          </label>
          <select
            id={`size-${id}`}
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>

      {/* Tombol Tambah ke Keranjang */}
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Tambahkan ke Keranjang
      </button>
    </div>
  );
}
