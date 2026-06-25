"use client"
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useHandpickedAlbums } from "./hooks/useHandpickedAlbums";
import HandpickedCard from "./components/HandpickedCard";

const HandpickedSection = () => {
    const albums = useHandpickedAlbums();
    console.log(albums)

    return (
        <section className="px-6 md:px-12 py-20 bg-[#e8cbb5]">
            <div className="flex flex-col max-w-6xl mx-auto gap-4">
                <span className="mb-5 text-[#C89268] text-sm font-semibold">HANDPICKED</span>
                <div className="flex flex-row justify-between ">
                    <h1 className="font-[family-name:var(--font-alegreya)] text-6xl font-light">Feature picks</h1>
                    <button className="font-[family-name:var(--font-geist-mono)] tracking-tight font-normal flex items-center cursor-pointer transition-all ease-in-out duration-500 hover:scale-105">
                        View All Collections
                        <span className="px-2">
                            <RxDoubleArrowRight />
                        </span>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {albums.map(album => (
                        <Link href={`/shop?album=${album.title}`} key={album.title}>
                            <HandpickedCard title={album.title} cover={album.cover_big} band={album.artist?.name ?? "Unknown Artist"}/>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default HandpickedSection;