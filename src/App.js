import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/service",
    element: <Home />
  },
  {
    path: "/aboutus",
    element: <AboutUs />
  },
  {
    path: "/contactus",
    element: <ContactUs />
  },
]);

const App = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
