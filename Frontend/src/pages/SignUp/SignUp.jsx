import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000" : "";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo_url: "",
    user_role: "user",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`${BASE_URL}/api/products/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
      } else {
        setSuccess("Registration successful!");
        setTimeout(() => navigate("/login"), 1500); // redirect after 1.5s
      }
    } catch (err) {
      setError("Server error");
      console.error(err);
    }
  };

  return (
    <div className="pt-10 pb-5">
      <div className="lg:w-[500px] lg:h-[700px] sm:w-[400px] sm:h-[550px] bg-gray-600 lg:ml-[500px] sm:ml-0  mb-10 rounded-xl">
        <div className="pt-10">
          <h2 className="text-center text-2xl font-bold text-white mb-2">
            WELCOME TO HEALTH HAVEN
          </h2>
          <p className="text-center text-xl font-semibold text-black">
            Register to your account
          </p>
        </div>

        {/* form start */}
        <form onSubmit={handleSubmit} className="pt-8 lg:pl-12 sm:pl-0">
          <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
            <input
              className="w-full h-full rounded-lg text-center"
              type="text"
              placeholder="Your Name"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <br />

          <div className=" lg:w-[400px] sm:w-[250px] h-[50px]">
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

          <div className="flex ">
            <div className="w-[400px] ">
              <input
                className="text-black rounded-lg text-center w-full h-[50px]"
                placeholder="Password"
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
              {showPassword ? (
                <FaEye className="w-10 h-5" />
              ) : (
                <FaEyeSlash className="w-10 h-5" />
              )}
            </div>
          </div>
          <br />

          <div className=" lg:w-[400px] sm:w-[250px] h-[50px] ">
            <input
              className="w-full h-full text-center rounded-lg"
              type="text"
              placeholder="Enter Your Photo URL"
              required
              name="photo_url"
              value={formData.photo_url}
              onChange={handleChange}
            />
          </div>
          <br />

          <div>
            <label className="form-control lg:w-[400px] sm:w-[250px] h-[50px]">
              <select
                name="user_role"
                value={formData.user_role}
                onChange={handleChange}
                required
                className="select select-bordered"
              >
                <option value="user" className="text-center text-xl">
                  user
                </option>
                <option value="seller" className="text-center text-xl">
                  seller
                </option>
              </select>
            </label>
          </div>
          <br />

          <div className="lg:w-[400px] sm:w-[250px] h-[50px] bg-lime-400 rounded-2xl">
            <button type="submit" className="w-full h-full text-white">
              Register
            </button>
          </div>
        </form>

        {/* messages */}
        {error && (
          <p className="text-red-700 text-center text-xl font-semibold mt-5">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center text-xl font-semibold mt-5">
            {success}
          </p>
        )}

        <br />
        <div className="flex ml-[240px]">
          <button className="mr-8 text-center pt-1">
            <FcGoogle className="w-10 h-10" />
          </button>
        </div>

        <div>
          <h3 className="text-center text-xl font-medium text-amber-600">
            Already Have An Account?{" "}
            <Link to={"/login"}>
              <span className="text-lime-300">LOGIN</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
