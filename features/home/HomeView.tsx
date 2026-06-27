import CategoriesSection from "./components/categories/CategoriesSection";
import HandpickedSection from "./components/handpicked/HandpickedSection";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/AboutSection";

const HomeView = () => {
    return (
        <>
            <Hero />
            <CategoriesSection />
            <HandpickedSection />
            <AboutSection />
        </>
    )
};

export default HomeView;