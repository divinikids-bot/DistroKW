"use client";

import { useCart } from "@/components/contexts/CartContext";
import Image from "next/image";

export default function Cart() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow rounded-lg p-4 w-80 fixed right-4 top-20">
      <h2 className="text-lg text-black font-semibold mb-4">🛒 Keranjang</h2>

      {cartItems.length === 0 ? (
        <p className="text-black">Keranjang kosong</p>
      ) : (
        <ul className="space-y-4 max-h-96 overflow-y-auto text-black">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="border-b pb-2 flex items-center space-x-4 text-black opacity-100"
            >
              {/* Gambar produk */}
              <div className="w-16 h-16 bg-black rounded overflow-hidden flex-shrink-0">
                <Image
                  src={item.image || "https://via.placeholder.com/300x400?text=No+Image"}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full rounded"
                />
              </div>

              {/* Info produk */}
              <div className="flex flex-col text-black opacity-100">
                <div className="font-medium text-black">{item.name}</div>
                <div className="text-sm text-black">Qty: {item.quantity}</div>
                <div className="text-sm font-semibold text-blue-600">
                  Rp {item.price.toLocaleString()} x {item.quantity} = Rp{" "}
                  {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Total */}
      {cartItems.length > 0 && (
        <div className="mt-4 border-t pt-2 text-black opacity-100">
          <div className="flex justify-between">
            <span className="text-black">Total Item:</span>
            <span className="text-black">{totalItems}</span>
          </div>
          <div className="flex justify-between font-semibold text-green-600">
            <span>Total:</span>
            <span>Rp {totalPrice.toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}
