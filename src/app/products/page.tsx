import ProductList from "@/components/ProductList";

export default function ProductsPage() {
  return (
    <div className="p-5">
      <div className="flex">
        {/* Daftar Produk */}
        <div className="flex-1">
          <ProductList />
        </div>

      </div>
    </div>
  );
}
