import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Register } from "./components/Authentification/Register";
import { Login } from "./components/Authentification/Login";
import { Footer } from "./components/footer/Footer";
import { Heropage } from "./pages/Heropage";
import AdminDashboard from "./pages/AdminDashboard";
import { Books } from "./pages/Books";
import { Members } from "./pages/Members";
import { Borrowrecords } from "./pages/Borrowrecords";
import { SettingsForm } from "./pages/Settings";
import UserDashboard from "./pages/UserDashboard";
import { Toaster } from "sonner";


function App() {
const router = createBrowserRouter([
  {
    path: "/",
   element: <Heropage />
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
    path: "/admin",
    element: <AdminDashboard />
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
  }
  
  
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
