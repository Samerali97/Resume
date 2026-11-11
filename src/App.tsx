import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routeHelpers from "./utils/appHelpers/routerHelpers";

const App = () => {
  const routes = routeHelpers();

  return (
    <>
      <Background />
      <Navbar />

      <main className="relative z-10">
        {routes.map((route) => {
          const Component = route.component;
          return <Component key={route.path} />;
        })}
      </main>

      <Footer />
    </>
  );
};

export default App;