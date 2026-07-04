import { getRandomPrice } from "@/shared/utils/getRandomPrice";

const queries = ["a", "e", "i", "o", "u"];

type Params = {
    page: number;
    limit: number;
    genre: number;
    search: string;
};

export async function getShopProducts({ page, limit, genre, search }: Params) {
    let allProducts: any[] = [];

    if (search) {
        const res = await fetch(
            `https://api.deezer.com/search/album?q=${search}`
        );

        const data = await res.json();

        allProducts = (data.data || []).map((album: any) => ({
            id: album.id,
            title: album.title,
            band: album.artist.name,
            cover: album.cover_xl,
            price: getRandomPrice(),
        }));

    } else if (genre !== 0) {
        const res = await fetch(
            `https://api.deezer.com/chart/${genre}/albums`
        );

        const data = await res.json();

        allProducts = (data.data || []).map((album: any) => ({
            id: album.id,
            title: album.title,
            band: album.artist.name,
            cover: album.cover_xl,
            price: getRandomPrice(),
        }));

    } else {
        const responses = await Promise.all(
            queries.map((q) =>
                fetch(`https://api.deezer.com/search?q=${q}`)
            )
        );

        const json = await Promise.all(responses.map(r => r.json()));

        const map = new Map();

        json.forEach(r => {
            r.data.forEach((track: any) => {
                const album = track.album;

                if (!map.has(album.id)) {
                    map.set(album.id, {
                        id: album.id,
                        title: album.title,
                        band: track.artist.name,
                        cover: album.cover_xl,
                        price: getRandomPrice(),
                    });
                }
            });
        });

        allProducts = Array.from(map.values());
    }

    const totalProducts = allProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    return {
        products: allProducts.slice(start, end),
        totalProducts,
        totalPages,
        currentPage: page,
    };
}