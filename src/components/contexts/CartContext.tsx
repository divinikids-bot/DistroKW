"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Tipe item di cart
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image?: string; // Opsional, untuk gambar produk
}

// Tipe context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, quantity: number, size: string, color: string) => void;
  clearCart: () => void;
}

// Bikin context-nya
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider-nya
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Tambah item ke cart
  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.size === newItem.size &&
          item.color === newItem.color
      );

      // Kalau item udah ada (id + size + color sama), tambahin quantity
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        // Kalau belum ada, tambahin item baru
        return [...prevItems, newItem];
      }
    });
  };

  // ✅ Hapus item spesifik dari cart
  const removeFromCart = (id: string, size: string, color: string) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === id && item.size === size && item.color === color)
      )
    );
  };

  // ✅ Update jumlah item (quantity)
  const updateQuantity = (id: string, quantity: number, size: string, color: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.size === size && item.color === color) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  // ✅ Kosongkan seluruh cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook untuk akses context-nya
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart harus dipakai dalam CartProvider");
  }
  return context;
};
