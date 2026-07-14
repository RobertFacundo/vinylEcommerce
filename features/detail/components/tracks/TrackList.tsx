import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { Track } from "../../types/album";
import TrackItem from "./TrackItem";
import { useRef, useState } from "react";

type TrackListProps = {
    tracks: Track[]
}

const TrackList = ({ tracks }: TrackListProps) => {
    const { audioRef, playTrack } = useAudioPlayer();

    return (
        <div className="flex flex-col gap-3 py-2 px-5 bg-[#C89268]/30">
            <h1 className="text-5xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-normal">Track List</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
                {tracks.map((track, index) => (
                    <TrackItem
                        key={track.id}
                        track={track}
                        index={index}
                        onPlay={playTrack}
                    />
                ))}
            </div>
            <audio ref={audioRef} />
        </div>
    )
};

export default TrackList;