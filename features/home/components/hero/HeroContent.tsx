"use client"
import { useRef } from "react";
import { useHeroAnimation } from "../../animations/useHeroAnimation";
import Link from "next/link";

const HeroContent = () => {
    const ref = useRef<HTMLDivElement>(null);

    useHeroAnimation(ref)
    return (
        <div ref={ref} className="opacity-0 flex flex-col gap-2 md:mt-0 mt-15">
            <p className="hero-subtitle text-[#C89268] text-sm font-semibold">VINYLS - CURATED WITH PASSION</p>
            <h1 className="h1 text-8xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold">Feel the warmth of <span className="text-[#C89268]">real music.</span></h1>
            <div className="p flex flex-col gap-2 mb-8 text-md opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tighter">
                <p>Rediscover the magic of analog sound</p>
                <p>Handpicked records for true music lovers</p>
            </div>
            <Link href="/shop" className="button py-2 mt-2 px-4 bg-[#dfba9d] w-1/2 text-center transition-colors duration-500 hover:bg-[#d6ab87] rounded-sm cursor-pointer font-[family-name:var(--font-geist-mono)]">
                EXPLORE COLLECTION
            </Link >
        </div>
    )
};

export default HeroContent;