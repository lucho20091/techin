import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import Aboutus from "./components/about-us";
import NotFound from "./error";
import Service from "./components/service";
import Contactus from "./components/contact-us";

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/about-us", element: <Aboutus /> },
  { path: "/service", element: <Service /> },
  { path: "/contact-us", element: <Contactus /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
