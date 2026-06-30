"use client"
import { gsap } from '@/shared/lib/gsap';
import { useGSAP } from '@gsap/react'
import { RefObject } from "react";

export const useHeroAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;

        if (!element) return;

        const q = gsap.utils.selector(element)

        const heading = q(".h1");
        const paragraph = q(".p");
        const button = q(".button");

        gsap.set(element, {
            opacity: 1,
        });

        const tl = gsap.timeline();

        tl.from(heading, {
            x: -150,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
        })
            .from(
                paragraph,
                {
                    x: -30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.6"
            ).from(button, {
                opacity: 0,
                x: -80,
                scale: .8,
                duration: 0.5
            }, "-=0.5");
    }, { scope: ref })
}