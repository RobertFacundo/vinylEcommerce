import { Album } from "../../types/album";
import Info from "./Info";
import Image from "next/image";

interface DetailContentProps {
    album: Album
}

const DetailContent = ({ album }: DetailContentProps) => {
    return (
        <div className="flex flex-col-reverse md:flex-col gap-10 lg:flex-row p-5 border-b border-[#C89268]/30">
            <div className="lg:w-2/4 ">
                <Image
                    src={album.cover}
                    alt={album.title}
                    width={700}
                    height={700}
                    className="w-10/12 rounded-lg mx-auto"
                />
            </div>
            <div className="lg:w-2/4">
                <Info album={album} />
            </div>
        </div>
    )
};

export default DetailContent;