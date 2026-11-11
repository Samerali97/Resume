import Home from "../../containers/Home";
import About from "../../containers/About";
import Experience from "../../containers/Experience";
import Skills from "../../containers/Skills";
import Contact from "../../containers/Contact";

const routeHelpers = () => {
  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/experience", component: Experience },
    { path: "/skills", component: Skills },
    { path: "/contact", component: Contact },
  ];

  return routes;
};

export default routeHelpers;
