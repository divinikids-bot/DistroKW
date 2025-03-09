"use client";

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

  // ✅ Ambil addToCart dari context
  const { addToCart } = useCart();

  // ✅ Fungsi ini akan dijalankan waktu klik tombol
  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1, // default quantity = 1
    });

    // Optional: buat debug
    console.log(`${name} berhasil ditambahkan ke keranjang!`);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
      <div>
        <Image
          src={imageUrl || fallbackImage}
          alt={name}
          width={300}
          height={400}
          unoptimized // Bypass next/image optimization
          className="object-cover w-full h-48 mb-4 rounded"
        />

        <h3 className="text-lg text-black font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Kategori: {category}</p>
        <p className="text-sm text-gray-500">{description || "Tidak ada deskripsi"}</p>
        <p className="text-sm text-gray-500">Stok: {stock}</p>
        <p className="font-bold text-blue-500 mt-2">Rp {price.toLocaleString()}</p>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
      >
        Tambahkan ke Keranjang
      </button>
    </div>
  );
}
