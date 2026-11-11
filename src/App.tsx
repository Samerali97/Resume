import Background from "./components/Background";
import HomeContainer from "./containers/HomeContainer";
import Navbar from "./components/Navbar";
import AboutContainer from "./containers/AboutContainer";
import ExperienceContainer from "./containers/ExperienceContainer";
import SkillsContainer from "./containers/SkillsContainer";
import ContactContainer from "./containers/ContactContainer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative z-10">
        <HomeContainer />
        <AboutContainer />
        <ExperienceContainer />
        <SkillsContainer />
        <ContactContainer />
      </main>

      <Footer />
    </>
  );
};

export default App;