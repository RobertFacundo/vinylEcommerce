import { useRef, useState } from 'react';
import { Track } from '../types/album';

export const useAudioPlayer = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null)

    const playTrack = (track: Track) => {
        if (!audioRef.current) return;
        if (currentTrack?.id === track.id) {
            audioRef.current.pause();
            return;
        }

        setCurrentTrack(track);

        audioRef.current.src = track.preview;
        audioRef.current.play();
    };

    return {
        audioRef,
        currentTrack,
        playTrack
    }
}
