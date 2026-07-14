"use client";
import { gsap } from "@/shared/lib/gsap";
import { useGSAP } from "@gsap/react";
import { RefObject } from "react";

export const useDetailContentAnimation = (ref: RefObject<HTMLDivElement | null>) => {
    useGSAP(() => {
        const element = ref.current;
        if (!element) return;

        const q = gsap.utils.selector(element);

        const image = q(".image");
        const infoContent = q(".info-content");
        const infoItems = q(".info-items")

        const tl = gsap.timeline();

        tl.fromTo(
            image,
            {
                opacity: 0,
                scale: 0.92,
                y: 30,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
            }
        )
            .fromTo(
                infoContent,
                {
                    opacity: 0,
                    scale:0.6
                },
                {
                    opacity: 1,
                    scale:1,
                    duration: 1.2,
                    stagger: 0.08,
                    ease: "power3.out",
                },
                "-=0.45"
            )
            .fromTo(
                infoItems,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.out",
                },
                "-=0.4"
            );

    }, { scope: ref })
}