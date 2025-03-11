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

  const [selectedSize, setSelectedSize] = useState("M");

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image: imageUrl || fallbackImage,
      size: selectedSize,
      color: "",
    });

    console.log(
      `${name} (size ${selectedSize}) berhasil ditambahkan ke keranjang!`
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col justify-between h-full">
      <div className="flex flex-col h-full justify-between">
        <div className="mb-4">
          <Image
            src={imageUrl || fallbackImage}
            alt={name}
            width={300}
            height={400}
            unoptimized
            className="object-cover w-full h-48 mb-4 rounded"
          />

          <h3 className="text-lg text-black font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Kategori: {category}</p>
          <p className="text-sm text-gray-500">{description || "Tidak ada deskripsi"}</p>
          <p className="text-sm text-gray-500">Stok: {stock}</p>
        </div>

        <div className="mt-auto">
          <p className="font-bold text-blue-500 mt-2">Rp {price.toLocaleString()}</p>
          <div className="mt-2">
            <label
              htmlFor={`size-${id}`}
              className="block text-sm font-medium text-black mb-1"
            >
              Pilih Ukuran:
            </label>
            <select
              id={`size-${id}`}
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="border border-black text-black rounded px-3 py-2 w-full"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition w-full"
          >
            Tambahkan ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
}
