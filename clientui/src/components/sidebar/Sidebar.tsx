import { BookOpen, Users, Calendar, Settings, LogOut } from 'lucide-react';





export const Sidebar = () => {
    return (
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
          <a href="#" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-red-700 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium ">Logout</span>
          </a>
        </div>
      </div>

    )
};