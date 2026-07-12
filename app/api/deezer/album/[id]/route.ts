import { NextResponse } from "next/server";

type Params = Promise<{
    id: string;
}>;

export async function GET(
    _req: Request,
    { params }: { params: Params }
) {
    const { id } = await params;
    console.log("Album id:", id);

    const res = await fetch(
        `https://api.deezer.com/album/${id}`
    );
    console.log("Status:", res.status);

    if (!res.ok) {
        return NextResponse.json(
            { error: "Album not found" },
            { status: res.status }
        );
    }

    const data = await res.json();

    console.log(data);

    const album = {
        id: data.id,

        // Información principal
        title: data.title,
        artist: {
            id: data.artist.id,
            name: data.artist.name,
        },

        // Imagen
        cover: data.cover_xl,

        // Metadata
        releaseDate: data.release_date,
        genre: data.genres.data[0]?.name,
        label: data.label,

        // Info del álbum
        totalTracks: data.nb_tracks,
        duration: data.duration,
        recordType: data.record_type,

        // Extras útiles
        explicit: data.explicit_lyrics,
        fans: data.fans,

        tracks: data.tracks.data.map((track: any) => ({
            id: track.id,
            title: track.title,
            duration: track.duration,
            preview: track.preview
        }))
    };

    return NextResponse.json(album);
}