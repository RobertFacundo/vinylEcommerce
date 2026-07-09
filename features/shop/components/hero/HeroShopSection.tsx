"use client"
import Overlay from "@/shared/components/ui/Overlay";
import Background from "./Background";
import HeroShopContent from "./HeroShopContent";
import { useRef } from "react";
import { useHeroShopAnimation } from "../../animations/useHeroShopAnimation";

const HeroShopSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    useHeroShopAnimation(ref)
    return (
        <div ref={ref} className="relative min-h-[70vh] overflow-hidden">
            <Background />
            <Overlay />
            <div className="relative z-10">
                <HeroShopContent />
            </div>
        </div>
    )
};

export default HeroShopSection;