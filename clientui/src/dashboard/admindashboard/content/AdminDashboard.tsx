import { Outlet } from "react-router";
import { AdminDrawer } from "../aside/Drawer";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { BookOpen, Users, Calendar, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';


const borrowingData = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 52 },
  { month: 'Mar', value: 48 },
  { month: 'Apr', value: 58 },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 78 },
];

const categoryData = [
  { name: 'Fiction', value: 35, color: '#3b82f6' },
  { name: 'Science', value: 25, color: '#f59e0b' },
  { name: 'History', value: 20, color: '#8b5cf6' },
  { name: 'Technology', value: 15, color: '#10b981' },
  { name: 'Others', value: 5, color: '#e5e7eb' },
];


const AdminDashboard: React.FC = () => {
  const [drawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Top header / brand */}
      <div className="p-6 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="bg-red-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            LM
          </div>
          <h1 className="text-2xl text-red-700 font-bold">LibraryManager</h1>
        </div>
        <p className="text-sm opacity-70 mt-1">Admin</p>
      </div>

      {/* Mobile drawer toggle + welcome */}
      <div className="p-4 lg:hidden flex items-center justify-between bg-white border-b border-gray-200">
        <button onClick={handleDrawerToggle} className="p-2 text-2xl">
          {drawerOpen ? <IoCloseSharp /> : <FaBars />}
        </button>
        <span className="text-lg text-red-700 font-bold">
          Welcome to AdminDashboard
        </span>
      </div>

      
      <div className="flex">
        {/* Drawer */}
        <aside
          className={`
            fixed top-0 left-0 z-40 w-64 bg-white shadow-lg
            ${drawerOpen ? "" : "hidden"}
            lg:static lg:block lg:w-64
          `}
          style={{ minHeight: "100vh" }}
        >
          {/* close button inside mobile drawer */}
          <button
            className="absolute top-4 right-4 text-black text-2xl lg:hidden"
            onClick={handleDrawerToggle}
            aria-label="Close drawer"
          >
            <IoCloseSharp />
          </button>

          <div className="pt-6">
            <AdminDrawer />
          </div>
        </aside>

        {/* Main content: make room for fixed drawer on large screens with lg:ml-64 */}
        <main className="flex-1 lg:ml-64">
          <div className="p-8">
            {/* Header */}
            <div className="flex flex-row justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold text-red-700">
                  Dashboard Overview
                </h2>
                <p className="text-base-content/70 mt-1">
                  Welcome back! Here's what's happening with your library today.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-12 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2">
                    <div className="bg-red-100 w-full h-full rounded-full flex items-center justify-center text-red-800 font-bold">
                      A
                    </div>
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Admin</p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              {[
                {
                  label: "Total Books",
                  value: "1,247",
                  change: "+12%",
                  positive: true,
                  icon: BookOpen,
                },
                {
                  label: "Total Members",
                  value: "328",
                  change: "+8%",
                  positive: true,
                  icon: Users,
                },
                {
                  label: "Books Borrowed",
                  value: "156",
                  change: "Current",
                  current: true,
                  icon: Calendar,
                },
                {
                  label: "Overdue Books",
                  value: "23",
                  change: "Action needed",
                  warning: true,
                  icon: AlertCircle,
                },
                {
                  label: "Returned (Month)",
                  value: "142",
                  change: "+15%",
                  positive: true,
                  icon: ArrowUpRight,
                },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          stat.warning ? "bg-red-100" : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            stat.warning ? "text-red-600" : "text-blue-600"
                          }`}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold mt-2">{stat.value}</p>

                    <div className="flex items-center mt-3">
                      {stat.positive && (
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          stat.positive
                            ? "text-green-600"
                            : stat.warning
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      >
                        {stat.change}
                      </span>
                      {!stat.current && !stat.warning && (
                        <span className="text-xs text-gray-500 ml-1">
                          from last month
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Borrowing Trends */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Borrowing Trends</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={borrowingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" tick={{ fill: "#666" }} />
                      <YAxis tick={{ fill: "#666" }} />
                      <RechartTooltip
                        contentStyle={{
                          backgroundColor: "#fff",
                          border: "1px solid #eee",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                        {borrowingData.map((_entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index >= 4 ? "#f59e0b" : "#3b82f6"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Books by Category */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Books by Category</h3>
                <div className="h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartTooltip />
                      <Legend
                        verticalAlign="bottom"
                        height={36}
                        formatter={(_value, entry: any) => (
                          <span className="text-sm font-medium">
                            {entry.payload?.name} {entry.payload?.value}%
                          </span>
                        )}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* For nested routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;