"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1️⃣ Bikin interface item keranjang
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// 2️⃣ Buat interface buat context-nya
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
}

// 3️⃣ Bikin context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4️⃣ Provider buat di wrap di layout.tsx
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 5️⃣ Hook untuk ambil data di komponen lain
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus digunakan di dalam CartProvider");
  }
  return context;
};
