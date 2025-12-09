import { Outlet } from "react-router";
import { UserDrawer } from "../aside/UserDrawer";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MessageSquare, Star } from "lucide-react";
import { BookOpen } from 'lucide-react';




const popularBooks = [
  { title: "The Silent Patient", author: "Alex Michaelides", rating: 4.7 },
  { title: "Atomic Habits", author: "James Clear", rating: 4.8 },
  { title: "The Alchemist", author: "Paulo Coelho", rating: 4.6 },
  { title: "Becoming", author: "Michelle Obama", rating: 4.9 },
];

const reviews = [
  {
    name: "John Mwangi",
    book: "Atomic Habits",
    rating: 5,
    text: "A life-changing book! Helped me build better habits and stay consistent.",
  },
  {
    name: "Grace Wanjiku",
    book: "The Alchemist",
    rating: 4,
    text: "Beautiful story with a deep message. Definitely worth reading.",
  },
  {
    name: "Michael Otieno",
    book: "Becoming",
    rating: 5,
    text: "Michelle Obama's story is inspiring and powerful.",
  },
];

const UserDashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <div className="flex bg-gray-100">


      {/* 📌 Sidebar (Drawer) */}
    <div>
      <aside
        className={`
          fixed top-0 z-40 w-64
          ${drawerOpen ? "block" : "hidden"}
          lg:static lg:block lg:w-64
        `}
        style={{ minHeight: "100vh" }}
      >
       <div className="p-6 border-b border-gray-200 bg-blue-400">
        <div className="flex items-center gap-3">
          <div className="bg-red-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            LM
          </div>
          <h1 className="text-2xl text-red-700 font-bold">LibraryManager</h1>
        </div>
        <p className="text-sm opacity-70 mt-1">Member</p>
      </div>
        <div>
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 text-black text-2xl lg:hidden"
            onClick={toggleDrawer}
          >
            <IoCloseSharp />
          </button>

          <UserDrawer />
        </div>
      </aside>
    </div>

      {/* 📌 Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen bg-blue-200">

        {/* Mobile Navbar */}
        <div className="lg:hidden flex justify-between items-center p-4 border-b">
          <button onClick={toggleDrawer} className="text-2xl">
            <FaBars />
          </button>
          <h1 className="text-2xl font-bold text-red-700"> Dashboard</h1>
        </div>

        {/* ----------------------- MAIN DASHBOARD BODY (UPDATED) ----------------------- */}
        <div className="p-8 flex-1">

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-red-700">Your Library</h2>
              <p className="text-base-content/70 mt-1 font-bold">
                Discover your next great read and explore what's new.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2">
                  <div className="bg-red-100 w-full h-full rounded-full flex items-center justify-center text-red-700 font-bold text-lg">
                    M
                  </div>
                </div>
              </div>
              <p className="font-semibold text-red-700">Member</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex items-center gap-5">
              <div className="p-4 bg-red-100 rounded-xl">
                <BookOpen className="w-7 h-7 text-red-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Available Books</p>
                <p className="text-3xl font-bold text-red-700">1,091</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex items-center gap-5">
              <div className="p-4 bg-red-100 rounded-xl">
                <MessageSquare className="w-7 h-7 text-red-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Books Borrowed</p>
                <p className="text-3xl font-bold text-red-700">3</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 flex items-center gap-5">
              <div className="p-4 bg-red-100 rounded-xl">
                <Star className="w-7 h-7 text-red-700" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Your Reviews</p>
                <p className="text-3xl font-bold text-red-700">12</p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Popular Books */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-700">Popular Books</h3>
              </div>

              <div className="space-y-4">
                {popularBooks.map((book, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-300 transition cursor-pointer"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-700">{book.title}</h4>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium text-gray-700">{book.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-700">Community Reviews</h3>
              </div>

              <div className="space-y-5 max-h-96 overflow-y-auto pr-2">
                {reviews.map((review, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="avatar">
                        <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold">
                          {review.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{review.name}</p>
                        <p className="text-sm text-gray-600">{review.book}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 ${
                            idx < review.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;


// const borrowingData = [
//   { month: 'Jan', value: 45 },
//   { month: 'Feb', value: 52 },
//   { month: 'Mar', value: 48 },
//   { month: 'Apr', value: 58 },
//   { month: 'May', value: 72 },
//   { month: 'Jun', value: 78 },
// ];

// const categoryData = [
//   { name: 'Fiction', value: 35, color: '#3b82f6' },
//   { name: 'Science', value: 25, color: '#f59e0b' },
//   { name: 'History', value: 20, color: '#8b5cf6' },
//   { name: 'Technology', value: 15, color: '#10b981' },
//   { name: 'Others', value: 5, color: '#e5e7eb' },
// ];


// const AdminDashboard: React.FC = () => {
//   const [drawerOpen, setIsDrawerOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setIsDrawerOpen((prev) => !prev);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">
//       {/* Top header / brand */}
//       <div className="p-6 border-b border-gray-200 bg-white">
//         <div className="flex items-center gap-3">
//           <div className="bg-red-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
//             LM
//           </div>
//           <h1 className="text-2xl text-red-700 font-bold">LibraryManager</h1>
//         </div>
//         <p className="text-sm opacity-70 mt-1">Admin</p>
//       </div>

//       {/* Mobile drawer toggle + welcome */}
//       <div className="p-4 lg:hidden flex items-center justify-between bg-white border-b border-gray-200">
//         <button onClick={handleDrawerToggle} className="p-2 text-2xl">
//           {drawerOpen ? <IoCloseSharp /> : <FaBars />}
//         </button>
//         <span className="text-lg text-red-700 font-bold">
//           Welcome to AdminDashboard
//         </span>
//       </div>

//       {/* ===== FIXED/FLEX LAYOUT: Drawer + Main Content SIDE BY SIDE ===== */}
//       <div className="flex">
//         {/* Drawer */}
//         <aside
//           className={`
//             fixed top-0 left-0 z-40 w-64 bg-white shadow-lg
//             ${drawerOpen ? "" : "hidden"}
//             lg:static lg:block lg:w-64
//           `}
//           style={{ minHeight: "100vh" }}
//         >
//           {/* close button inside mobile drawer */}
//           <button
//             className="absolute top-4 right-4 text-black text-2xl lg:hidden"
//             onClick={handleDrawerToggle}
//             aria-label="Close drawer"
//           >
//             <IoCloseSharp />
//           </button>

//           <div className="pt-6">
//             <UserDrawer />
//           </div>
//         </aside>

//         {/* Main content: make room for fixed drawer on large screens with lg:ml-64 */}
//         <main className="flex-1 lg:ml-64">
//           <div className="p-8">
//             {/* Header */}
//             <div className="flex flex-row justify-between items-center mb-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-red-700">
//                   Dashboard Overview
//                 </h2>
//                 <p className="text-base-content/70 mt-1">
//                   Welcome back! Here's what's happening with your library today.
//                 </p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="avatar">
//                   <div className="w-12 rounded-full ring ring-red-600 ring-offset-base-100 ring-offset-2">
//                     <div className="bg-red-100 w-full h-full rounded-full flex items-center justify-center text-red-800 font-bold">
//                       A
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="font-semibold">Admin</p>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
//               {[
//                 {
//                   label: "Total Books",
//                   value: "1,247",
//                   change: "+12%",
//                   positive: true,
//                   icon: BookOpen,
//                 },
//                 {
//                   label: "Total Members",
//                   value: "328",
//                   change: "+8%",
//                   positive: true,
//                   icon: Users,
//                 },
//                 {
//                   label: "Books Borrowed",
//                   value: "156",
//                   change: "Current",
//                   current: true,
//                   icon: Calendar,
//                 },
//                 {
//                   label: "Overdue Books",
//                   value: "23",
//                   change: "Action needed",
//                   warning: true,
//                   icon: AlertCircle,
//                 },
//                 {
//                   label: "Returned (Month)",
//                   value: "142",
//                   change: "+15%",
//                   positive: true,
//                   icon: ArrowUpRight,
//                 },
//               ].map((stat, i) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div
//                     key={i}
//                     className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
//                   >
//                     <div className="flex justify-between items-start mb-4">
//                       <div
//                         className={`p-3 rounded-lg ${
//                           stat.warning ? "bg-red-100" : "bg-blue-100"
//                         }`}
//                       >
//                         <Icon
//                           className={`w-6 h-6 ${
//                             stat.warning ? "text-red-600" : "text-blue-600"
//                           }`}
//                         />
//                       </div>
//                     </div>

//                     <p className="text-sm text-gray-600">{stat.label}</p>
//                     <p className="text-3xl font-bold mt-2">{stat.value}</p>

//                     <div className="flex items-center mt-3">
//                       {stat.positive && (
//                         <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
//                       )}
//                       <span
//                         className={`text-sm font-medium ${
//                           stat.positive
//                             ? "text-green-600"
//                             : stat.warning
//                             ? "text-red-600"
//                             : "text-blue-600"
//                         }`}
//                       >
//                         {stat.change}
//                       </span>
//                       {!stat.current && !stat.warning && (
//                         <span className="text-xs text-gray-500 ml-1">
//                           from last month
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Charts Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Borrowing Trends */}
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//                 <h3 className="text-xl font-bold mb-6">Borrowing Trends</h3>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={borrowingData}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
//                       <XAxis dataKey="month" tick={{ fill: "#666" }} />
//                       <YAxis tick={{ fill: "#666" }} />
//                       <RechartTooltip
//                         contentStyle={{
//                           backgroundColor: "#fff",
//                           border: "1px solid #eee",
//                           borderRadius: "8px",
//                         }}
//                       />
//                       <Bar dataKey="value" radius={[8, 8, 0, 0]}>
//                         {borrowingData.map((_entry, index) => (
//                           <Cell
//                             key={`cell-${index}`}
//                             fill={index >= 4 ? "#f59e0b" : "#3b82f6"}
//                           />
//                         ))}
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>

//               {/* Books by Category */}
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
//                 <h3 className="text-xl font-bold mb-6">Books by Category</h3>
//                 <div className="h-80 flex items-center justify-center">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                       <Pie
//                         data={categoryData}
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={60}
//                         outerRadius={100}
//                         paddingAngle={5}
//                         dataKey="value"
//                       >
//                         {categoryData.map((entry, index) => (
//                           <Cell key={`cell-${index}`} fill={entry.color} />
//                         ))}
//                       </Pie>
//                       <RechartTooltip />
//                       <Legend
//                         verticalAlign="bottom"
//                         height={36}
//                         formatter={(_value, entry: any) => (
//                           <span className="text-sm font-medium">
//                             {entry.payload?.name} {entry.payload?.value}%
//                           </span>
//                         )}
//                       />
//                     </PieChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* For nested routes */}
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;