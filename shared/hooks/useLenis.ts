"use client"
import { useEffect } from "react"
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from "../lib/gsap";

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({ autoResize: false });

        const resize = () => {
            requestAnimationFrame(() => {
                lenis.resize();
                ScrollTrigger.refresh();
            });
        };

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);
        lenis.on("scroll", ScrollTrigger.update);

        requestAnimationFrame(resize);

        window.addEventListener("load", resize);

        const observer = new ResizeObserver(resize);
        observer.observe(document.body);

        document.querySelectorAll("img").forEach((img) => {
            if (!img.complete) img.addEventListener("load", resize);
        });

        return () => {
            observer.disconnect();
            window.removeEventListener("load", resize);
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }, []);
};