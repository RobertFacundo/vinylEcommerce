import Background from "./Background";
import HeroContent from "./HeroContent";

const Hero = () => {
    return (
        <div className="flex w-full min-h-screen">
            <div className="w-1/3 flex items-center justify-center pl-8">
                <HeroContent />
            </div>
            <div className="w-2/3 relative">
                <Background />
            </div>
        </div>
    )
};

export default Hero;