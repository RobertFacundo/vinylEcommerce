"use client"
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const useAboutSection = (ref: RefObject<HTMLDivElement | null>) => {
    return (
        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            const q = gsap.utils.selector(element);

            const span = q(".span");
            const h1 = q(".h1");
            const paragraph = q(".paragraph");

            gsap.set(element, {
                opacity: 1,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: "top 60%",
                }
            });

            tl.from(span, {
                x: -150,
                opacity: 0,
                duration: 1.2,
                ease: "power3.inOut"
            }).from(h1, {
                opacity: 0,
                duration: 0.8,
                ease: "power4.inOut"
            }, "-=0.6").from(paragraph, {
                x: -80,
                scale: 0.8,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.inOut"
            }, "-=0.5")
        }, { scope: ref })
    )
}