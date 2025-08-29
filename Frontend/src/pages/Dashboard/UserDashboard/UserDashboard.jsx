import { User, ShoppingCart, Settings, LogOut, Heart, Bell, Wallet } from "lucide-react";
import { useEffect } from "react";

const UserDashboard = () => {
  const {  fetchCart } = useProductStore();
  // Fetch cart when user is logged in
  useEffect(() => {
    if (user?.id) {
      fetchCart(user.id);
    }
  }, [user, fetchCart]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Welcome Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Welcome Back, Alex 👋</h1>
          <p className="text-gray-600 mt-2 text-lg">Here’s what’s happening in your account today</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
          <img
            src="https://i.pravatar.cc/120"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-200"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Alex Johnson</h2>
            <p className="text-gray-600">alex.johnson@example.com</p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Premium Member
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <h3 className="text-lg font-semibold">Orders</h3>
            </div>
            <p className="text-2xl font-bold mt-2">24</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-pink-600" />
              <h3 className="text-lg font-semibold">Wishlist</h3>
            </div>
            <p className="text-2xl font-bold mt-2">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center gap-3">
              <Bell className="w-8 h-8 text-yellow-500" />
              <h3 className="text-lg font-semibold">Messages</h3>
            </div>
            <p className="text-2xl font-bold mt-2">5</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
            <div className="flex items-center gap-3">
              <Wallet className="w-8 h-8 text-green-600" />
              <h3 className="text-lg font-semibold">Balance</h3>
            </div>
            <p className="text-2xl font-bold mt-2">$350.00</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <User className="w-8 h-8 text-blue-600" />
              <h3 className="text-xl font-semibold">My Profile</h3>
            </div>
            <p className="text-gray-600">View and edit your personal details.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <ShoppingCart className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-semibold">My Orders</h3>
            </div>
            <p className="text-gray-600">Track and manage your orders.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-semibold">Settings</h3>
            </div>
            <p className="text-gray-600">Customize your preferences.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <LogOut className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Logout</h3>
            </div>
            <p className="text-gray-600">Securely log out of your account.</p>
          </div>
        </div>

        {/* Recent Activity */}
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Activity</h2>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <ul className="space-y-4">
            <li className="flex justify-between text-gray-700">
              <span>✅ Order #1234 has been delivered</span>
              <span className="text-sm text-gray-500">2 days ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>❤️ Added -iPhone 15 Pro- to wishlist</span>
              <span className="text-sm text-gray-500">4 days ago</span>
            </li>
            <li className="flex justify-between text-gray-700">
              <span>💳 Payment of $120 completed</span>
              <span className="text-sm text-gray-500">1 week ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
