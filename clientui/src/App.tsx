import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Register } from "./components/Authentification/Register";
import { Login } from "./components/Authentification/Login";
import { Footer } from "./components/footer/Footer";
import { Heropage } from "./pages/Heropage";
// import AdminDashboard from "./dashboard/admindashboard/content/AdminDashboard";
import { Books } from "./pages/Books";
import { Members } from "./pages/Members";
import { Borrowrecords } from "./pages/Borrowrecords";
import { SettingsForm } from "./pages/Settings";
import UserDashboard from "./dashboard/userdashboard/content/UserDashboard";
import { Toaster } from "sonner";
// import { AdminDrawer } from "./dashboard/admindashboard/aside/Drawer";
import  AdminDashboard  from "./dashboard/admindashboard/content/AdminDashboard";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";


function App() {
  const isAdmin = useSelector((state:RootState) => state.user.user?.role === 'Admin');
  console.log(isAdmin)
  const isUser = useSelector((state:RootState) => state.user.user?.role === 'user'); 
const router = createBrowserRouter([
  {
    path: "/",
   element: <Heropage />,
  },
 
   {
    path: "/books",
    element: <Books />
  },
   {
    path: "/members",
    element: <Members />
  },
  {

    path: "/borrowrecords",
    element: <Borrowrecords />
  },
  {
    path: "/settings",
    element: <SettingsForm />
  },

  {
    path: "/userdashboard",
    element: <UserDashboard />
  },
   {
    path: "/register",
    element: <Register />
  },
   {
    path: "/login",
    element: <Login />
  },
   {
    path: "/footer",
    element: <Footer />
  },
   {
    path: "*",
    element: <Error />
  },
    {
    path: "/admin/dashboard",
    element: !isAdmin? <AdminDashboard /> : <Heropage />,
    children:[
    {
      path: "books",
      element: <Books />
    },
     {
      path: "members",
      element: <Members />
    },
    {
      path: "borrowrecords",
      element: <Borrowrecords />
    },
    {
      path: "settings",
      element: <SettingsForm />
    }

    ]
  },
  {
    path: "/users/dashboard",
    element: isUser? <UserDashboard />: <Login />,
    children:[
    {
      path: "books",
      element: <Books />
    },
    {
      path: "myborrowrecords",
      element: <Borrowrecords />
    },
    {
      path: "settings",
      element: <SettingsForm />
    }

    ]
  },
  
  
]);
  return (
    <>
    <RouterProvider router={router} />
    <Toaster position= 'top-right' toastOptions={{
      classNames: {
        error: 'bg-red-500 text-white',
        success: 'bg-green-500 text-white'
      }
    }} />
    </>
  )
}

export default App
