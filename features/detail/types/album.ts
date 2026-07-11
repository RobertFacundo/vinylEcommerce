export interface Track {
    id: number;
    title: string;
    duration: number;
    preview: string;
}

export interface Album {
    id: number;

    title: string;
    artist: {
        id:number;
        name:string,
    }

    cover: string;

    releaseDate: string;
    genre?: string;
    label: string;

    totalTracks: number;
    duration: number;
    recordType: string;

    explicit: boolean;
    fans: number;

    tracks: Track[];

    price: number;
}