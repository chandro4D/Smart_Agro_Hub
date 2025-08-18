
import { useProductStore } from "../store/useProductStore.js";
import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductCard from "../components/ProductCard";
import AddProductModal from "../components/AddProductModal";
import { useEffect } from "react";
import Slider from "../pages/Slider/Slider.jsx";
import Footer from "./Footer/Footer.jsx";


function HomePage() {
  const { products, loading, error, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div >
      <div className="mt-14 mb-10">
        <h1 className='text-center text-sky-500 mb-2 text-4xl font-bold'>WELCOME TO HEALTH HAVEN</h1>

        <h1 className='text-center text-sky-500 text-4xl font-bold'>SEE SOME PRODUCTS</h1>
      </div>
      <Slider />
      {/* ---------------------------------FAQ-------------------- */}
      <div>
        <h1 className='text-center text-sky-500 text-4xl font-bold'>SOME FREQUENTLY ASKED QUESTION</h1>
      </div>
      <br />
      <div className="join join-vertical ml-[140px]  w-[1200px] mb-[50px]">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How can I make online payments ?
          </div>
          <div className="collapse-content text-sky-500 text-xl">
            <p>HealthHaven provide all kinds of online payment option such as - Stripe , Visa Debit or MasterCard Debit and more. Also HealthHaven have a self HealthHaven wallet. Our all online payment option is 100% secure.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What is the refund policy? ?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>Refund Policy is the agreement where you inform customers about your policies regarding returns and refunds. HealthHaven have refund policy. </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Is it possible to have my order delivered faster?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>We have urgent delivery options if you are wise. Some fees may apply. Please contact us.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I have my order delivered outside Bangladesh?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'>For legal reasons, we cannot receive any orders outside Bangladesh. If you are on vacation and need a refill, please contact us at - 09610-00-11-22.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are there any hidden charges?
          </div>
          <div className="collapse-content">
            <p className='text-sky-500 text-xl'> No, there are no hidden charges for any activity you are engaged with HealthHaven. We always follow an honest and transparent business policy.</p>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 ">
        <div className="flex justify-between items-center mb-8">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("add_product_modal").showModal()}
          >
            <PlusCircleIcon className="size-5 mr-2" />

            Add Product
          </button>
          <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
            <RefreshCwIcon className="size-5" />
          </button>
        </div>

        <AddProductModal />

        {error && <div className="alert alert-error mb-8">{error}</div>}

        {products.length === 0 && !loading && (
          <div className="flex flex-col justify-center items-center h-96 space-y-4">
            <div className="bg-base-100 rounded-full p-6">
              <PackageIcon className="size-12" />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-semibold ">No products found</h3>
              <p className="text-gray-500 max-w-sm">
                Get started by adding your first product to the inventory
              </p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="loading loading-spinner loading-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}
export default HomePage;
