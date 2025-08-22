import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-hot-toast";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/api/products/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        return toast.error(data.message || "Login failed");
      }

      // Save user info to localStorage (optional)
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="pt-10 pb-5">
      <ToastContainer position="top-center" autoClose={2000} />
      <div className="lg:w-[500px] sm:w-[350px] lg:h-[600px] sm:h-[500px] bg-lime-100 lg:ml-[500px] sm:ml-0 mb-10 rounded-xl">
        <div className="pt-12">
          <h2 className="text-center text-2xl font-bold text-pink-400 mb-2">
            WELCOME TO <i>SMART AGRO HUB</i>
          </h2>
          <p className="text-center text-xl font-semibold text-black">
            Login To Your Account By Entering <br /> Your Email and Password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="pt-10 lg:pl-12 sm:pl-0">
          <div className="lg:w-[400px] sm:w-[250px] h-[50px]">
            <input
              className="w-full h-full rounded-lg text-center"
              type="email"
              placeholder="Your Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <br />

          <div className="flex">
            <div className="w-[400px] sm:w-[250px]">
              <input
                className="text-black rounded-lg text-center w-[400px] h-[50px]"
                placeholder="Enter Your Password"
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div
              className="mt-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye className="w-10 h-5 text-black mt-1 ml-24" /> : <FaEyeSlash className="w-10 h-5 text-black mt-1 ml-24" />}
            </div>
          </div>
          <br />

          <div className="lg:w-[400px] sm:w-[250px] h-[50px] rounded-2xl">
            <button
              type="submit"
              className="btn btn-outline btn-secondary w-full h-full text-white"
            >
              LOGIN
            </button>
          </div>
        </form>

        <br />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-yellow-600">
            Don’t Have An Account?{" "}
            <Link to="/signup">
              <span className="text-lime-300">Register</span>
            </Link>
          </h3>
        </div>

        <br />
        <div className="divider divider-neutral text-xl font-medium ml-14 mr-14">
          Continue With
        </div>

        <div className="flex ml-[240px] mt-6">
          <button className="mr-8 text-center pt-1">
            <FcGoogle className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
