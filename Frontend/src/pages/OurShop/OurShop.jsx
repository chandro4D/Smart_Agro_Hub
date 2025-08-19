import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore.js";
import AllProductCard from "../../components/AllProductCard.jsx";

function OurShop() {
  const { products, loading,  fetchProducts } = useProductStore();
  
    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Our Shop</h1>
      {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-16">
            {products.map((product) => (
              <AllProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
    </div>
  );
}
export default OurShop;
