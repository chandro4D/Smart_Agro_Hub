import { Toaster } from "react-hot-toast";
import { useState } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import OurShop from "./pages/OurShop/OurShop.jsx";
import LogIn from "./pages/LogIn/LogIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";

import Insecticides from "./pages/ProductsCategory/Insecticides.jsx";
import Seed from "./pages/ProductsCategory/Seed.jsx";
import Tools from "./pages/ProductsCategory/Tools.jsx";
import Feed from "./pages/ProductsCategory/Feed.jsx";
import RoleBasedDashboard from "./pages/Dashboard/RoleBasedDashboard.jsx";



function App() {
  const { theme } = useThemeStore();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  return (
    <div className=" bg-base-200 transition-colors duration-300" data-theme={theme}>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shop" element={<OurShop />} />
        <Route path="/login" element={<LogIn setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/insecticides" element={<Insecticides />} />
        <Route path="/seeds" element={<Seed />} />
        <Route path="/Tools" element={<Tools />} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/dashboard" element={<RoleBasedDashboard />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
