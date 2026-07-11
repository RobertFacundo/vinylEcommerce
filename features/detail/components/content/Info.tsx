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
    const infoItems = [
        {
            icon: HiCalendarDateRange,
            label: "Release Date",
            value: album.releaseDate,
        },
        {
            icon: HiMusicalNote,
            label: "Genre",
            value: album.genre,
        },
        {
            icon: TbVinyl,
            label: "Type",
            value: album.recordType,
            className: "capitalize",
        },
        {
            icon: HiTag,
            label: "Record Label",
            value: album.label,
        },
    ];
    return (
        <div className="flex flex-col gap-8 mt-3">

            <div className="space-y-2 border-b pb-2 border-[#C89268]/30">
                <span className="text-[#C89268] text-sm font-semibold">{album.genre}</span>
                <h1 className="md:text-8xl text-6xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold">
                    {album.title}
                </h1>

                <p className="text-lg text-zinc-400 font-[family-name:var(--font-geist-mono)]">
                    {album.artist}
                </p>

                <div className="flex items-center gap-4 mt-4">
                    <span className="text-2xl font-semibold font-[family-name:var(--font-geist-mono)]">
                        ${album.price}
                    </span>

                </div>
            </div>

            <div className="space-y-3 text-md opacity-80 font-[family-name:var(--font-geist-mono)] tracking-wide">

                {infoItems.map(({ icon: Icon, label, value, className }) => (
                    <div key={label} className="flex items-center gap-3">
                        <Icon className="text-xl text-[#C89268]" />
                        {label}:
                        <span className={className ? `font-bold ${className}` : "font-bold"}>
                            {value}
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default Info;