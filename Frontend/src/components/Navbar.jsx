import { Link, useResolvedPath } from "react-router-dom";
import { LogOutIcon, ShoppingBagIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import { useProductStore } from "../store/useProductStore.js";

function Navbar() {
  const { pathname } = useResolvedPath();
  const isHomePage = pathname === "/";

  const { products } = useProductStore();

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* LOGO */}
          <div className="flex-1 lg:flex-none">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="size-9 text-primary" />
                <span
                  className="font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                >
                  SmartAgroHub
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <h3 className="btn btn-neutral btn-dash mt-3 mr-5 font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"><Link to="/">Home</Link></h3>
            <h3 className="btn btn-neutral btn-dash mt-3 mr-5 font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"><Link to="/shop">OurShop</Link></h3>
            <h3 className="btn btn-neutral btn-dash mt-3 mr-5 font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"><Link to="/login">LogIn</Link></h3>
            <h3 className="btn btn-neutral btn-dash mt-3 mr-5 font-semibold font-mono tracking-widest text-2xl 
                    bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"><Link to="/signup">SignUp</Link></h3>
          </div>
          <div className="flex items-center gap-4">

            <ThemeSelector />

            {isHomePage && (
              <div className="indicator">
                <div className="p-2 rounded-full hover:bg-base-200 transition-colors">
                  <ShoppingBagIcon className="size-5" />
                  <span className="badge badge-sm badge-primary indicator-item">
                    {products.length}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className=" tooltip tooltip-bottom mr-5" data-tip="Name Or Email"  >
            <div className="dropdown dropdown-bottom">
              <div tabIndex={0} className=" m-1"><UserIcon className="text-2xl rounded-full " /></div>
              <ul tabIndex={0} className="dropdown-content text-black z-[1] menu p-6 shadow bg-gradient-to-r from-cyan-500 to-blue-500 rounded-box w-72">
                <li className="font-semibold">
                  <Link to="/updateProfile">Update Profile</Link>
                </li>
                <li className="font-semibold">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button className="btn bg-white w-[120px] font-bold text-red-600 text-base">
                    Logout <LogOutIcon className="text-2xl" />
                  </button>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
