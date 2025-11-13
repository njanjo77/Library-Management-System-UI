import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { LandingPage } from "./components/LandingPage";
import { About } from "./components/about/About";
import { Register } from "./components/Authentification/Register";
import { Login } from "./components/Authentification/Login";
import { Footer } from "./components/footer/Footer";


function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
   {
    path: "/about",
    element: <About />
  },
   {
    path: "/contact",
    element: <h1>Welcome to Homepage</h1>
  },
   {
    path: "/books",
    element: <h1>Welcome to Homepage</h1>
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
    </>
  )
}

export default App
