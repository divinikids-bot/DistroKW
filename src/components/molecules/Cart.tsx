"use client";

import { useCart } from "@/components/contexts/CartContext";
import Image from "next/image"; // Ensure you import Image from next/image

export default function Cart() {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white shadow rounded-lg p-4 w-80 fixed right-4 top-20">
      <h2 className="text-lg font-semibold mb-4">🛒 Keranjang</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Keranjang kosong</p>
      ) : (
        <ul className="space-y-4 max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <li key={item.id} className="border-b pb-2 flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
                <Image
                  src={item.image || "https://via.placeholder.com/300x400?text=No+Image"}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full rounded"
                />
              </div>

              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">
                  Qty: {item.quantity}
                </div>
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
        <div className="mt-4 border-t pt-2">
          <div className="flex justify-between">
            <span>Total Item:</span>
            <span>{totalItems}</span>
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
