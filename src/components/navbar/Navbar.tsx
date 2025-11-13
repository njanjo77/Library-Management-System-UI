import { NavLink } from "react-router"

export const Navbar = () => {
  return (
    <>
    <div className="navbar ">
        <nav className="bg-red-950 shadow-sm border-b  px-6 py-4 items-center justify-between ">
            <ul className="flex gap-4 text-white text-lg font-medium menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <br />
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    </div>
    </>
  )
}
