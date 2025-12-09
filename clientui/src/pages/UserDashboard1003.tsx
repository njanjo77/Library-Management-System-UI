
// import { BookOpen, Home, User, Settings, LogOut, Star, MessageSquare } from 'lucide-react';

// const popularBooks = [
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 4.5 },
//   { title: "1984", author: "George Orwell", rating: 4.8 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.7 },
//   { title: "Pride and Prejudice", author: "Jane Austen", rating: 4.6 },
// ];

// const reviews = [
//   { name: "Sarah Johnson", book: "The Great Gatsby", rating: 5, text: "A masterpiece! The writing is beautiful and the story is captivating." },
//   { name: "Michael Chen", book: "1984", rating: 5, text: "Incredibly relevant even today. A must-read for everyone." },
//   { name: "Emily Davis", book: "To Kill a Mockingbird", rating: 5, text: "Powerful narrative about justice and morality. Highly recommend!" },
// ];

// export default function MemberDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex">
//       {/* Sidebar */}
//       <div className="w-64 bg-linear-to-b from-indigo-700 to-indigo-900 text-white shadow-2xl">
//         <div className="p-6 border-b border-indigo-800">
//           <div className="flex items-center gap-3">
//             <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
//               LH
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">LibraryHub</h1>
//               <p className="text-indigo-200 text-sm">Member</p>
//             </div>
//           </div>
//         </div>

//         <nav className="mt-8 px-4">
//           {[
//             { icon: Home, label: 'Dashboard', active: true },
//             { icon: BookOpen, label: 'Books' },
//             { icon: User, label: 'My Records' },
//             { icon: Settings, label: 'Settings' },
//           ].map((item, i) => (
//             <a
//               key={i}
//               href="#"
//               className={`flex items-center gap-4 px-4 py-3 rounded-lg mb-2 transition-all ${
//                 item.active
//                   ? 'bg-white/20 backdrop-blur-sm shadow-lg border border-white/10'
//                   : 'hover:bg-white/10'
//               }`}
//             >
//               <item.icon className="w-5 h-5" />
//               <span className="font-medium">{item.label}</span>
//             </a>
//           ))}
//         </nav>

//         <div className="absolute bottom-0 w-full p-4 border-t border-indigo-800">
//           <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/10 transition-all">
//             <LogOut className="w-5 h-5" />
//             <span className="font-medium">Logout</span>
//           </a>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-8">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800">Your Library</h2>
//             <p className="text-gray-600 mt-1">Discover your next great read and connect with fellow book lovers.</p>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="avatar">
//               <div className="w-12 rounded-full ring ring-indigo-500 ring-offset-2">
//                 <div className="bg-linear-to-br from-indigo-500 to-purple-600 w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg">
//                   M
//                 </div>
//               </div>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800">Member</p>
//             </div>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex items-center gap-5">
//             <div className="p-4 bg-indigo-100 rounded-xl">
//               <BookOpen className="w-8 h-8 text-indigo-600" />
//             </div>
//             <div>
//               <p className="text-gray-600 text-sm">Available Books</p>
//               <p className="text-3xl font-bold text-gray-800">1,091</p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex items-center gap-5">
//             <div className="p-4 bg-amber-100 rounded-xl">
//               <MessageSquare className="w-8 h-8 text-amber-600" />
//             </div>
//             <div>
//               <p className="text-gray-600 text-sm">Books Borrowed</p>
//               <p className="text-3xl font-bold text-gray-800">3</p>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 flex items-center gap-5">
//             <div className="p-4 bg-purple-100 rounded-xl">
//               <Star className="w-8 h-8 text-purple-600" />
//             </div>
//             <div>
//               <p className="text-gray-600 text-sm">Your Reviews</p>
//               <p className="text-3xl font-bold text-gray-800">12</p>
//             </div>
//           </div>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Popular Books */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center gap-3 mb-6">
//               <BookOpen className="w-6 h-6 text-indigo-600" />
//               <h3 className="text-xl font-bold text-gray-800">Popular Books</h3>
//             </div>
//             <div className="space-y-4">
//               {popularBooks.map((book, i) => (
//                 <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all cursor-pointer">
//                   <div>
//                     <h4 className="font-semibold text-gray-800">{book.title}</h4>
//                     <p className="text-sm text-gray-600">{book.author}</p>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
//                     <span className="font-medium text-gray-700">{book.rating}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Community Reviews */}
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
//             <div className="flex items-center gap-3 mb-6">
//               <MessageSquare className="w-6 h-6 text-purple-600" />
//               <h3 className="text-xl font-bold text-gray-800">Community Reviews</h3>
//             </div>
//             <div className="space-y-5 max-h-96 overflow-y-auto pr-2">
//               {reviews.map((review, i) => (
//                 <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
//                   <div className="flex items-center gap-4 mb-3">
//                     <div className="avatar">
//                       <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
//                         {review.name.split(' ').map(n => n[0]).join('')}
//                       </div>
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-800">{review.name}</p>
//                       <p className="text-sm text-gray-600">{review.book}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-1 mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



