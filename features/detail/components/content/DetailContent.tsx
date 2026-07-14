import { useRef } from "react";
import { Album } from "../../types/album";
import Controls from "./Controls";
import Info from "./Info";
import Image from "next/image";
import { useDetailContentAnimation } from "../../animations/useDetailContentAnimation";

interface DetailContentProps {
    album: Album
}

const DetailContent = ({ album }: DetailContentProps) => {
    const ref = useRef<HTMLDivElement>(null);
    useDetailContentAnimation(ref)
    return (
        <div ref={ref} className="flex flex-col-reverse md:flex-col gap-10 lg:flex-row p-5 border-b border-[#C89268]/30">
            <div className="lg:w-2/4 ">
                <Image
                    src={album.cover}
                    alt={album.title}
                    width={700}
                    height={700}
                    className="image w-10/12 rounded-lg mx-auto"
                />
            </div>
            <div className="lg:w-2/4 flex flex-col">
                <Info album={album} />
                <Controls album={album} />
            </div>
        </div>
    )
};

export default DetailContent;