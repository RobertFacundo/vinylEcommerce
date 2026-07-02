import { NextResponse } from "next/server";
import { getRandomPrice } from "@/shared/utils/getRandomPrice";

const queries = ["a", "e", "i", "o", "u"];

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 12);

        const responses = await Promise.all(
            queries.map((query) =>
                fetch(`https://api.deezer.com/search?q=${query}`)
            )
        );

        const jsonResponses = await Promise.all(
            responses.map((res) => res.json())
        );

        const albumsMap = new Map();

        jsonResponses.forEach((response) => {
            response.data.forEach((track: any) => {
                const album = track.album;

                if (!albumsMap.has(album.id)) {
                    albumsMap.set(album.id, {
                        id: album.id,
                        title: album.title,
                        band: track.artist.name,
                        cover: album.cover_xl,
                        price: getRandomPrice(),
                    });
                }
            });
        });

        const allProducts = Array.from(albumsMap.values());

        const totalProducts = allProducts.length;
        const totalPages = Math.ceil(totalProducts / limit);

        const start = (page - 1) * limit;
        const end = start + limit;

        const paginatedProducts = allProducts.slice(start, end);

        return NextResponse.json({
            products: paginatedProducts,
            totalProducts,
            totalPages,
            currentPage: page
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch albums" },
            { status: 500 }
        )
    }
}