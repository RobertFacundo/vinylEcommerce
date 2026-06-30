"use client";
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const useCategoriesSection = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;
        const q = gsap.utils.selector(element);
        const titleSpan = q(".title-span");
        const heading = q(".heading");
        const cardAnimation = q(".card-animation")

        console.log("titleSpan:", titleSpan);

        gsap.set(element, {
            opacity: 1,
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top 60%",
            }
        });

        tl.from(titleSpan, {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        }).from(heading, {
            opacity: 0,
            duration: 0.8,
            stagger: 0.12
        }, "-=0.5").
        from(cardAnimation, {
            opacity: 0,
            scale: .8,
            duration: 0.4,
            stagger: 0.16
        }, "-=0.4")
    }, { scope: ref })
}