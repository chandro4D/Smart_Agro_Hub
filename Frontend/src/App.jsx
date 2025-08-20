import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";

import { Toaster } from "react-hot-toast";
import OurShop from "./pages/OurShop/OurShop.jsx";
import  LogIn  from "./pages/LogIn/LogIn.jsx";
import  SignUp  from "./pages/SignUp/SignUp.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Insecticides from "./pages/ProductsCategory/Insecticides.jsx";
import Seed from "./pages/ProductsCategory/Seed.jsx";
import Tools from "./pages/ProductsCategory/Tools.jsx";
import Feed from "./pages/ProductsCategory/Feed.jsx";

function App() {
  const { theme } = useThemeStore();

  return (
    <div className=" bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shop" element={<OurShop />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insecticides" element={<Insecticides />} />
        <Route path="/seeds" element={<Seed />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Feed" element={<Feed />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
