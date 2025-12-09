import { adminDrawerData } from "./drawerData";
import { NavLink } from "react-router-dom";
import { BookOpen, Users, FileText, Settings } from "lucide-react";

// Icon mapping for menu items
const iconMap: Record<string, React.ReactNode> = {
    books: <BookOpen className="w-5 h-5" />,
    members: <Users className="w-5 h-5" />,
    borrowrecords: <FileText className="w-5 h-5" />,
    settings: <Settings className="w-5 h-5" />,
};

export const AdminDrawer = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
           <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg text-red-700 font-semibold mb-2 px-4 ">
                AdminDashboard Menu
            </h2>
            <ul className="menu menu-lg gap-1">
                {adminDrawerData.map((item) => (
                    <li key={item.id}>
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-white border-2 border-red-200 ${
                                    isActive
                                        ? "text-white font-semibold shadow-md"
                                        : "hover:bg-red-900 text-base-content bg-red-700"
                                }`
                            }
                        >
                            <span className="shrink-0 text-red-600 bg-blue-200 p-2 rounded-md">
                                {iconMap[item.id] || <BookOpen className="w-5 h-5" />}
                            </span>
                            <span className="text-base">{item.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
           </div>
        </div>
    );
};
