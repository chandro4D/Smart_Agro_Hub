import { PackageIcon, PlusCircleIcon, RefreshCwIcon } from "lucide-react";
import ProductCard from "../../../components/ProductCard.jsx";
import AddProductModal from "../../../components/AddProductModal.jsx";
import { useProductStore } from "../../../store/useProductStore.js";

const AdminDashboard = () => {
    const { products, loading, error, fetchProducts } = useProductStore();
    return (

        <main className="max-w-6xl mx-auto px-4 py-8 ">
            <div className="mt-14 mb-20">
                <h1 className='text-center font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-[#cc33ff] via-[#ff9900] via-[#33cc33] via-[#3399ff] to-[#ff0000] mb-2 text-4xl font-bold'>ALL ADDED PRODUCTS HERE</h1>

                <h1 className='text-center font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] via-[#ff9900] via-[#33cc33] via-[#3399ff] to-[#cc33ff] mb-2 text-4xl font-bold'>YOU CAN UPDATE-DELETE  AND ADD NEW PRODUCTS</h1>
            </div>
            <div className="flex justify-between items-center mb-8">
                <div className="flex">
                    <div>
                        <button
                            className="btn btn-primary in"
                            onClick={() => document.getElementById("add_product_modal").showModal()}
                        >
                            <PlusCircleIcon className="size-5 mr-2" />

                            Add Product
                        </button>
                    </div>
                    <div className="ml-56">
                        <h1 className='font-mono tracking-widest 
                  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2 text-2xl font-semibold'> <span className="text-yellow-500 text-3xl">{products.length}</span> DIFFERENT PRODUCTS HERE</h1>
                    </div>
                </div>
                <div>
                    <button className="btn btn-ghost btn-circle" onClick={fetchProducts}>
                        <RefreshCwIcon className="size-5" />
                    </button>
                </div>
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

    );

};

export default AdminDashboard;