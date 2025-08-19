import { ShoppingCart ,  Eye } from "lucide-react";

function ProductCard({ product }) {
  
  return (
    <div className="mt-10  card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* PRODUCT IMAGE */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      <div className="card-body">
        {/* PRODUCT INFO */}
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <p className="text-2xl font-bold text-primary">${Number(product.price).toFixed(2)}</p>

        {/* CARD ACTIONS */}
        <div className="card-actions justify-end mt-4">
            <div className="btn btn-sm btn-primary btn-outline">
                 <ShoppingCart className="size-4" />
            </div>
          {/* <Link to={`/product/${product.id}`} className="btn btn-sm btn-info btn-outline">
            <ShoppingCart className="size-4" />
          </Link> */}
            <div className="btn btn-sm btn-error  btn-outline">
              <Eye className="size-4" />
            </div>
          {/* <button
            className="btn btn-sm btn-error  btn-outline"
            onClick={() => deleteProduct(product.id)}
          >
            <Eye className="size-4" />
          </button> */}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
