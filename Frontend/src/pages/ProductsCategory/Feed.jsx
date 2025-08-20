import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore.js";
import AllProductCard from "../../components/AllProductCard.jsx";
import Footer from "../Footer/Footer.jsx";

function Feed() {
  const { products, loading, fetchFeed } = useProductStore();

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return (
    <div>
      <div>
        <div>
          <h1 className='text-center text-sky-500 text-4xl font-bold pt-20 mb-10'>SEE ALL FEED HERE</h1>
        </div>
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
      <div className="mt-10">
        <Footer></Footer>
      </div>

    </div>
  );
}
export default Feed;
