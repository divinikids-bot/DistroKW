"use client"; // Diperlukan untuk useState & useEffect

import { useEffect, useState } from "react";
import axios from "axios";

// Definisikan tipe data produk
interface Product {
  objectId: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  imageURL: string;
  jumlah: number;
  harga: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Product[]>("/api/products") // Ambil data dari API Route Next.js
      .then((response) => {
        console.log("Data Produk:", response.data); // Debugging
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">List Produk</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.objectId} className="border p-3 rounded-lg shadow-lg bg-gray-900 text-white">
            {/* Cek apakah URL gambar valid */}
            {product.imageURL ? (
              <img
                src={product.imageURL}
                alt={product.nama}
                className="w-full h-40 object-cover rounded bg-gray-700"
                onError={(e) => (e.currentTarget.src = "/fallback-image.png")} // Gambar fallback jika error
              />
            ) : (
              <div className="w-full h-40 flex items-center justify-center bg-gray-700 rounded">
                <span className="text-gray-400">Gambar Tidak Tersedia</span>
              </div>
            )}

            <h3 className="text-lg font-semibold mt-2">{product.nama}</h3>
            <p className="text-gray-400">Kategori: {product.kategori}</p>
            <p className="text-gray-500">{product.deskripsi}</p>
            <p className="text-sm">Stok: {product.jumlah}</p>
            <p className="text-lg font-bold text-green-400">
              Rp {product.harga ? product.harga.toLocaleString() : "0"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
