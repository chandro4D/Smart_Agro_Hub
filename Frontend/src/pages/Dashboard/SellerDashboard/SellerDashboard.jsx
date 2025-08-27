import { Package, DollarSign, Users, BarChart3, PlusCircle, Settings, LogOut } from "lucide-react";

const SellerDashboard = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-800">Welcome, Seller 🛍️</h1>
                    <p className="text-gray-600 mt-2 text-lg">Manage your store, products, and sales all in one place</p>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                        <div className="flex items-center gap-3">
                            <DollarSign className="w-8 h-8 text-green-600" />
                            <h3 className="text-lg font-semibold">Revenue</h3>
                        </div>
                        <p className="text-2xl font-bold mt-2">$12,450</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                        <div className="flex items-center gap-3">
                            <Package className="w-8 h-8 text-blue-600" />
                            <h3 className="text-lg font-semibold">Products</h3>
                        </div>
                        <p className="text-2xl font-bold mt-2">56</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                        <div className="flex items-center gap-3">
                            <Users className="w-8 h-8 text-purple-600" />
                            <h3 className="text-lg font-semibold">Customers</h3>
                        </div>
                        <p className="text-2xl font-bold mt-2">220</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow hover:scale-105 transition">
                        <div className="flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-orange-600" />
                            <h3 className="text-lg font-semibold">Orders</h3>
                        </div>
                        <p className="text-2xl font-bold mt-2">78</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <PlusCircle className="w-8 h-8 text-blue-600" />
                            <h3 className="text-xl font-semibold">Add Product</h3>
                        </div>
                        <p className="text-gray-600">Add new items to your store.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <Settings className="w-8 h-8 text-purple-600" />
                            <h3 className="text-xl font-semibold">Manage Store</h3>
                        </div>
                        <p className="text-gray-600">Update store settings & info.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                            <LogOut className="w-8 h-8 text-red-600" />
                            <h3 className="text-xl font-semibold">Logout</h3>
                        </div>
                        <p className="text-gray-600">Securely log out of your account.</p>
                    </div>
                </div>

                {/* Recent Orders */}
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Recent Orders</h2>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <ul className="space-y-4">
                        <li className="flex justify-between text-gray-700">
                            <span>📦 Order #A102 delivered to John Doe</span>
                            <span className="text-sm text-gray-500">2 hrs ago</span>
                        </li>
                        <li className="flex justify-between text-gray-700">
                            <span>📦 Order #A101 shipped to Emily Davis</span>
                            <span className="text-sm text-gray-500">1 day ago</span>
                        </li>
                        <li className="flex justify-between text-gray-700">
                            <span>📦 Order #A100 pending for David Smith</span>
                            <span className="text-sm text-gray-500">3 days ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;
