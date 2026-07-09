"use client";
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const useHeroShopAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        const q = gsap.utils.selector(element);

        const heading = q(".h1");
        const paragraph = q(".p");

        gsap.set(element, {
            opacity: 1,
        });

        const tl = gsap.timeline();

        tl.from(heading, {
            x: -120,
            opacity: 0,
            duration: 1,
            ease: "power3.inOut",
        }).from(
            paragraph, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power3.inOut"
        }, "-=0.4"
        )
    }, { scope: ref })
}