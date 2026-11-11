import Background from "./components/PageContent/Background";
import PrimaryFooter from "./components/Footers/PrimaryFooter";
import routeHelpers from "./utils/appHelpers/routerHelpers";
import PrimaryHeader from "./components/Headers/PrimaryHeader";

const App = () => {
  const routes = routeHelpers();

  return (
    <>
      <Background />
      <PrimaryHeader />

      <main className="relative z-10">
        {routes.map((route) => {
          const Component = route.component;
          return <Component key={route.path} />;
        })}
      </main>

      <PrimaryFooter />
    </>
  );
};

export default App;
