import { Album } from "../../types/album";
import {
    HiCalendarDateRange,
    HiMusicalNote,
    HiTag
} from "react-icons/hi2";
import { TbVinyl } from "react-icons/tb";

type InfoProps = {
    album: Album
}

const Info = ({ album }: InfoProps) => {
    return (
        <div className="flex flex-col gap-8 mt-3">

            <div className="space-y-2">
                <h1 className="text-4xl font-bold">
                    {album.title}
                </h1>

                <p className="text-lg text-zinc-400">
                    {album.artist}
                </p>

                <div className="flex items-center gap-4 mt-4">
                    <span className="text-2xl font-semibold">
                        ${album.price}
                    </span>

                </div>
            </div>

            <div className="space-y-3">

                <div className="flex items-center gap-3">
                    <HiCalendarDateRange className="text-xl text-zinc-500" />
                    <span>{album.releaseDate}</span>
                </div>

                <div className="flex items-center gap-3">
                    <HiMusicalNote className="text-xl text-zinc-500" />
                    <span>{album.genre}</span>
                </div>

                <div className="flex items-center gap-3">
                    <TbVinyl className="text-xl text-zinc-500" />
                    <span className="capitalize">{album.recordType}</span>
                </div>

                <div className="flex items-center gap-3">
                    <HiTag className="text-xl text-zinc-500" />
                    <span>{album.label}</span>
                </div>

            </div>

        </div>
    )
};

export default Info;