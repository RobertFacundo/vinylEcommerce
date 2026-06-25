import CategoriesSection from "./components/categories/CategoriesSection";
import HandpickedSection from "./components/handpicked/HandpickedSection";
import Hero from "./components/hero/Hero";

const HomeView = () => {
    return (
        <>
            <Hero />
            <CategoriesSection />
            <HandpickedSection />
        </>
    )
};

export default HomeView;