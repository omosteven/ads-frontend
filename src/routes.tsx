import AboutUs from "components/App/AboutUs";
import Home from "components/App/Home";

export const routes = [
  {
    route: "",
    component: <Home />,
    subRoutes: [],
    title: "Welcome",
    icon: "none",
  },
  {
    route: "/about-us",
    component: <AboutUs />,
    subRoutes: [],
    title: "About Us",
    icon: "none",
  },
];
