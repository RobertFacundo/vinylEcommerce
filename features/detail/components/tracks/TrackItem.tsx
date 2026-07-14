import { Track } from "../../types/album";
import { HiPlay } from "react-icons/hi2";
import { formatDuration } from "../../utils/formatDuration";

type TrackItemProps = {
    track: Track,
    index: number,
    onPlay: (track: Track) => void;
}

const TrackItem = ({ track, index, onPlay }: TrackItemProps) => {
    return (
        <div className="group flex items-center justify-between py-3 ">
            <div className="flex items-center gap-4">

                <span className="text-[#984d13] text-sm font-semibold">
                    {index + 1}
                </span>
                <button onClick={() => onPlay(track)} className="cursor-pointer text-[#d3752ec7] hover:text-[#e67118] transition-colors duration-500 ease-in-out">
                    <HiPlay size={22} />
                </button>

                <span className=" text-md opacity-80 font-[family-name:var(--font-geist-mono)] tracking-tighter opacity-80 group-hover:opacity-100 transition-colors duration-500 ease-in-out">
                    {track.title}
                </span>

            </div>

            <span className="text-[#C89268] text-sm font-semibold">{formatDuration(track.duration)}</span>
        </div>
    )
};

export default TrackItem;