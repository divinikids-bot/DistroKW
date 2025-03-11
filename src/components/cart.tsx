"use client";

import { useCart } from "@/components/contexts/CartContext";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">KERANJANG BELANJA 🛒</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-400">
          <p>Keranjang kamu kosong!</p>
          <Link
            href="/products"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Lihat Produk
          </Link>
        </div>
        
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="flex flex-col md:flex-row justify-between bg-zinc-900 p-4 rounded-xl shadow-md"
              >
                <div className="flex space-x-4">
                  <div className="w-24 h-24 bg-white rounded-md overflow-hidden relative">
                    <Image
                      src={item.image || "https://via.placeholder.com/300x400?text=No+Image"}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full rounded"
                      unoptimized
                    />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-400">
                      Warna: {item.color || "Default"}
                    </p>
                    <p className="text-sm text-gray-400">
                      Ukuran: {item.size || "-"}
                    </p>
                    <p className="text-sm mt-1">
                      Harga: Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between items-end mt-4 md:mt-0">
                  <div className="flex items-center space-x-2">
                    <label htmlFor="quantity">Jumlah:</label>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          parseInt(e.target.value),
                          item.size,
                          item.color
                        ) 
                      }
                      className="bg-zinc-800 text-white border border-gray-600 rounded px-2 py-1"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-2">
                    <button
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      className="bg-red-600 text-white text-sm px-4 py-1 rounded hover:bg-red-700 transition"
                    >
                      Hapus
                    </button>
                  </div>

                  <p className="text-sm mt-4 font-semibold">
                    Subtotal: Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl shadow-md space-y-4 h-fit">
            <h2 className="text-lg font-semibold">
              RINGKASAN PESANAN | {cartItems.length} PRODUK
            </h2>

            <div className="flex justify-between">
              <span>Subtotal produk</span>
              <span>Rp {totalPrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>TOTAL PESANAN</span>
              <span>Rp {totalPrice.toLocaleString()}</span>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => alert("Checkout coming soon!")}
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
              >
                LANJUTKAN KE PEMBAYARAN
              </button>

              <Link
                href="/products"
                className="block text-center border border-gray-600 text-gray-300 py-2 rounded hover:bg-gray-800 transition"
              >
                LANJUT BELANJA
              </Link>

              <button
                onClick={clearCart}
                className="block text-center text-sm text-gray-400 underline w-full mt-2"
              >
                Hapus Semua
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
