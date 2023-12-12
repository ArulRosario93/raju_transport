import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/services",
    element: <Services />
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
