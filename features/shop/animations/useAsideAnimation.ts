"use client";
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const useAsideAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const q = gsap.utils.selector(element);

        const search = q(".search");
        const filters = q(".filters");
        const buttons = q(".filter-button");

        gsap.set([search, filters], {
            opacity: 0,
        });

        gsap.set(buttons, {
            opacity: 0,
            x: -20,
        });

        const tl = gsap.timeline();

        tl.fromTo(search,
            {
                y: -15,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: .5,
                ease: "power3.out"
            })

            .fromTo(filters,
                {
                    opacity: 0,
                    scale: .95,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: .35,
                    ease: "power2.out"
                },
                "-=0.2")

            .to(buttons, {
                x: 0,
                opacity: 1,
                stagger: .05,
                duration: .35,
                ease: "power3.out"
            },
                "-=0.15");
    }, { scope: ref })
}