import { getRandomPrice } from "@/shared/utils/getRandomPrice";

type DeezerAlbum = {
    id: number;
    title: string;
    cover_xl: string;
    artist: {
        name: string;
    }
};


export async function getRecommendationsByArtist(
    artistName: string,
    exclude: number
) {

    const res = await fetch(
        `https://api.deezer.com/search/album?q=${encodeURIComponent(artistName)}`
    );

    const data = await res.json();


    return (data.data as DeezerAlbum[])
        .filter(album => album.id !== exclude)
        .slice(0, 4)
        .map(album => ({
            id: album.id,
            title: album.title,
            cover: album.cover_xl,
            band: album.artist.name,
            price: getRandomPrice()
        }));
}