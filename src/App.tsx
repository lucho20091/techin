import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home-1";
import HomeTwo from "./components/homes/home-2";
import HomeThree from "./components/homes/home-3";
import Aboutus from "./components/about-us";
import Pricing from "./components/pricing";
import Blog from "./components/blog";
import BlogGrid from "./components/blog-grid";
import SingleBlog from "./components/single-blog";
import Portfolio from "./components/portfolio";
import SinglePortfolio from "./components/single-portfolio";
import Team from "./components/team";
import SingleTeam from "./components/single-team";
import Faq from "./components/faq";
import NotFound from "./error";
import Service from "./components/service";
import SingleService from "./components/single-service";
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
