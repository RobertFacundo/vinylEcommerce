"use client";
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const usePaginationAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const q = gsap.utils.selector(element);

        const button = q(".button");
        const spansContainer = q(".spans-container")

        gsap.set(element, {
            opacity: 1,
        });

        const tl = gsap.timeline();

        tl.from(button, {
            scale: 2.2,
            opacity: 0,
            duration: 0.9,
            ease: "power3.inOut",
        }).from(spansContainer, {
            scale: 0.6,
            duration: 0.8,
            opacity: 0,
            stagger: 0.12,
            ease: "power4.inOut"
        }, "-=0.5");

    }, { scope: ref })
}