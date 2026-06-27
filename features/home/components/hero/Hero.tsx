import Background from "./Background";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <div className="flex md:flex-row flex-col w-full min-h-screen">
            <div className="md:w-1/3 w-full flex items-center justify-center pl-8">
                <HeroContent />
            </div>
            <div className="md:w-2/3 w-full relative h-[50vh] md:h-auto md:mt-0 mt-5">
                <Background />
            </div>
        </div>
    )
};

export default Hero;