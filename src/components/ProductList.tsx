"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Card from "@/components/molecules/card"; 

const FiSearch = dynamic(
  () => import("react-icons/fi").then((mod) => mod.FiSearch),
  { ssr: false }
);

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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get<Product[]>(
        "https://moralapparel-us.backendless.app/api/data/products?pageSize=20"
      )
      .then((response) => {
        console.log("Jumlah Produk:", response.data.length);
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal fetch produk:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.kategori === selectedCategory
      );
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.nama.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.kategori))),
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-white mb-4">List Product</h2>

    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      
      <div className="w-full md:w-1/6">
        <select
          className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "Semua Kategori" : category}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center bg-white rounded overflow-hidden w-full md:w-1/9">
        <input
          type="text"
          placeholder="search..."
          className="px-4 py-2 w-full text-black focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bg-green-600 px-4 text-white">
          <FiSearch />
          </button>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-white">Produk tidak ditemukan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredProducts.map((product) => (
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
      )}
    </div>
  );
}
