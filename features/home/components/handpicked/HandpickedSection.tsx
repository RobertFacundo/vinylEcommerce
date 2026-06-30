"use client"
import Link from "next/link";
import ViewCollectionsButton from "@/shared/components/ui/ViewCollectionsButton";
import { useHandpickedAlbums } from "./hooks/useHandpickedAlbums";
import HandpickedCard from "./components/HandpickedCard";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import SectionH1 from "@/shared/components/ui/SectionH1";
import { useRef } from "react";
import { useHandpickedSection } from "../../animations/useHandpickedSection";
import CardSkeleton from "@/shared/components/loaders/CardSkeleton";

const HandpickedSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const albums = useHandpickedAlbums();

    const ready = albums.length === 4

    useHandpickedSection(ref, ready)

    return (
        <section ref={ref} className="px-6 md:px-12 py-20 bg-[#e8cbb589]">
            <div className="flex flex-col max-w-8xl mx-auto gap-4">
                <SectionTitle title="HANDPICKED" />
                <div className="heading flex flex-row justify-between items-center">
                    <SectionH1 title="Featured picks" />
                    <ViewCollectionsButton />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mx-auto mt-5 min-h-[400px]">
                    {ready
                        ? albums.map(album => (
                            <Link href={`/shop?album=${album.title}`} key={album.title}>
                                <HandpickedCard title={album.title} cover={album.cover_big} band={album.artist?.name ?? "Unknown Artist"} price={album.price} />
                            </Link>
                        ))
                        : Array.from({ length: 4 }).map((_, i) => (
                            <CardSkeleton key={i} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default HandpickedSection;