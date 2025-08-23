import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard/UserDashboard.jsx";
import SellerDashboard from "./SellerDashboard/SellerDashboard.jsx";
import AdminDashboard from "./AdminDashboard/AdminDashboard.jsx";

const RoleBasedDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login"); // redirect if not logged in
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  switch (user.user_role) {
    case "admin":
      return <AdminDashboard />;
    case "seller":
      return <SellerDashboard />;
    case "user":
      return <UserDashboard />;
    default:
      return <p>Invalid role</p>;
  }
};

export default RoleBasedDashboard;
