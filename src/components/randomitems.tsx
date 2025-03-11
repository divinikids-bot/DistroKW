"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";

interface Product {
  objectId: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  imageURL?: string;
  jumlah: number;
  harga: number;
}

export default function RandomItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "https://moralapparel-us.backendless.app/api/data/products?pageSize=20"
        );
        setProducts(response.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Terjadi kesalahan yang tidak diketahui.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  // SHUFFLE RANDOM PRODUCTS (run once when products change)
  const randomItems = useMemo(() => {
    if (products.length === 0) return [];
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }, [products]);

  return (
    <section className="bg-black text-white py-5">
      {/* Hero / Banner */}
      <div className="flex justify-center px-4 mb-8">
        <Image
          src="/Landscapehome.png"
          alt="Hot Items Today"
          width={1200}
          height={500}
          className="w-full max-w-screen-xl rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-white">
          <p>Loading produk pilihan...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-10 text-red-500">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Items */}
      {!loading && !error && (
        <div className="px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
            {randomItems.map((item) => (
              <div
                key={item.objectId}
                className="border border-gray-700 rounded-xl bg-white text-black overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <Image
                  src={
                    item.imageURL
                      ? item.imageURL
                      : "https://via.placeholder.com/300x400?text=No+Image"
                  }
                  alt={item.nama}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover"
                />

                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.nama}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.kategori}</p>
                  </div>

                  <div className="mt-2">
                    <p className="font-bold text-blue-600 mb-4">
                      Rp {item.harga?.toLocaleString()}
                    </p>

                    <Link
                      href={`/products/${item.objectId}`}
                      className="block text-center bg-green text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                      Lihat Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
