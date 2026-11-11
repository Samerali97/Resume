import HomeContainer from "../../containers/HomeContainer";
import AboutContainer from "../../containers/AboutContainer";
import ExperienceContainer from "../../containers/ExperienceContainer";
import SkillsContainer from "../../containers/SkillsContainer";
import ContactContainer from "../../containers/ContactContainer";

const routeHelpers = () => {
    const routes = [
        { path: "/", component: HomeContainer },
        { path: "/about", component: AboutContainer },
        { path: "/experience", component: ExperienceContainer },
        { path: "/skills", component: SkillsContainer },
        { path: "/contact", component: ContactContainer }
    ];

    return routes;
};

export default routeHelpers;