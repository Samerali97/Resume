import Background from "./components/Background";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/Navbar";
import AboutContainer from "./containers/AboutContainer";

const App = () => {
  return (
    <>
      <Background />

      <main className="relative z-10">
        <Navbar />
        <HomeContainer />
        <AboutContainer />
      </main>
    </>
  );
};

export default App;