import Cart from "@/components//molecules/Cart";

export default function CartPage() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Keranjang Belanja</h1>
      <Cart /> {/* komponen cart yang sama dengan di dropdown */}
    </main>
  );
}
