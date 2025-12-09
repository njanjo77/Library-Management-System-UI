
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { BookOpen, Users, Calendar, Settings, LogOut, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

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

export default function LibraryDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-base-300 text-base-content shadow-xl">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-700 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              LM
            </div>
            <h1 className="text-2xl text-red-700 font-bold">LibraryManager</h1>
          </div>
          <p className="text-sm opacity-70 mt-1">Admin</p>
        </div>

        <nav className="mt-8 px-4">
          {[
            { icon: BookOpen, label: 'Dashboard', active: true },
            { icon: BookOpen, label: 'Books' },
            { icon: Users, label: 'Members' },
            { icon: Calendar, label: 'Borrow Records' },
            { icon: Settings, label: 'Settings' },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center gap-4 px-4 py-3 rounded-lg mb-2 transition-all text-black ${
                item.active
                  ? 'bg-red-700 text-white shadow-lg'
                  : 'hover:bg-base-200 text-base-content'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 max-w-fit p-4 border-t border-base-200">
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-700 hover:text-white transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium ">Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-red-700">Dashboard Overview</h2>
            <p className="text-base-content/70 mt-1">Welcome back! Here's what's happening with your library today.</p>
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
            { label: 'Total Books', value: '1,247', change: '+12%', positive: true, icon: BookOpen },
            { label: 'Total Members', value: '328', change: '+8%', positive: true, icon: Users },
            { label: 'Books Borrowed', value: '156', change: 'Current', current: true, icon: Calendar },
            { label: 'Overdue Books', value: '23', change: 'Action needed', warning: true, icon: AlertCircle },
            { label: 'Returned (Month)', value: '142', change: '+15%', positive: true, icon: ArrowUpRight },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg ${stat.warning ? 'bg-red-100' : 'bg-blue-100'}`}>
                  <stat.icon className={`w-6 h-6 ${stat.warning ? 'text-red-600' : 'text-blue-600'}`} />
                </div>
              </div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
              <div className="flex items-center mt-3">
                {stat.positive && <TrendingUp className="w-4 h-4 text-green-500 mr-1" />}
                <span className={`text-sm font-medium ${stat.positive ? 'text-green-600' : stat.warning ? 'text-red-600' : 'text-blue-600'}`}>
                  {stat.change}
                </span>
                {!stat.current && !stat.warning && <span className="text-xs text-gray-500 ml-1">from last month</span>}
              </div>
            </div>
          ))}
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
                  <XAxis dataKey="month" tick={{ fill: '#666' }} />
                  <YAxis tick={{ fill: '#666' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid #eee', borderRadius: '8px' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {borrowingData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={index >= 4 ? '#f59e0b' : '#3b82f6'} />
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
                  <Tooltip />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(_value, entry: any) => (
                      <span className="text-sm font-medium">{entry.name} {entry.value}%</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}