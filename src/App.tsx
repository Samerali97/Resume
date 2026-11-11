import Background from "./components/Background";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/Navbar";
import AboutContainer from "./containers/AboutContainer";
import ExperienceContainer from "./containers/ExperienceContainer";

const App = () => {
  return (
    <>
      <Background />

      <main className="relative z-10">
        <Navbar />
        <HomeContainer />
        <AboutContainer />
        <ExperienceContainer />
      </main>
    </>
  );
};

export default App;