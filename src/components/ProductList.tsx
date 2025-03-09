"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Card from "@/components/molecules/card"; // Path Card disesuaikan!
// Define product type sesuai data dari Backendless
interface Product {
  objectId: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  imageURL?: string;
  jumlah: number;
  harga: number;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Panggil API dari Backendless
    axios
      .get<Product[]>("https://moralapparel-us.backendless.app/api/data/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div>
 
      {/* Product List */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-white mb-4">List Product</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <Card
              key={product.objectId}
              id={product.objectId}
              name={product.nama}
              category={product.kategori}
              description={product.deskripsi}
              price={product.harga}
              stock={product.jumlah}
              imageUrl={product.imageURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
