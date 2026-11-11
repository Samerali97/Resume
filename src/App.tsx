import Background from "./components/Background";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/Navbar";
import AboutContainer from "./containers/AboutContainer";
import ExperienceContainer from "./containers/ExperienceContainer";
import SkillsContainer from "./containers/SkillsContainer";
import ContactContainer from "./containers/ContactContainer";

const App = () => {
  return (
    <>
      <Background />

      <main className="relative z-10">
        <Navbar />
        <HomeContainer />
        <AboutContainer />
        <ExperienceContainer />
        <SkillsContainer />
        <ContactContainer />
      </main>
    </>
  );
};

export default App;