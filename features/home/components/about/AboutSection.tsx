"use client"
import Image from "next/image";
import { Items } from "@/shared/data/AboutItems";
import AboutItem from "./AboutItem";
import AboutImage from '@/shared/assets/images/home/AboutImage.png'
import { useRef } from "react";
import { useAboutSection } from "../../animations/useAboutSection";

const AboutSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    useAboutSection(ref);
    return (
        <div ref={ref} className="flex flex-col md:flex-row w-full">
            <Image src={AboutImage} alt="About image" className="md:w-1/2" />
            <div className="md:w-1/2 flex flex-col py-4 px-8">
                <p className="span text-[#C89268] text-sm font-semibold mb-5">OUR PHILOSOPHY</p>
                <h1 className="h1 text-6xl md:text-7xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold mb-7">Music deserves to be felt.</h1>
                <div className="paragraph flex flex-col gap-2 mb-8 text-base md:text-lg opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tighter">
                    <p>
                        We believe in the beauty of imperfection — in the crackle before the song begins,
                        in the ritual of putting on a record.
                    </p>
                    <p>
                        Vinyl connects us to music in a deeper way, turning listening into an experience rather than background noise.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {Items.map((item, index) => (
                        <AboutItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default AboutSection;