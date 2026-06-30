import Overlay from "@/shared/components/ui/Overlay";
import Background from "./Background";
import HeroShopContent from "./HeroShopContent";

const HeroShopSection = () => {
    return (
        <div className="relative min-h-[70vh] overflow-hidden">
            <Background />
            <Overlay />
            <div className="relative z-10">
                <HeroShopContent />
            </div>
        </div>
    )
};

export default HeroShopSection;