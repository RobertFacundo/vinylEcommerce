import { NextResponse } from "next/server";
import { getShopProducts } from "@/features/shop/api/shop.service";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);

        const page = Number(searchParams.get("page") ?? 1);
        const limit = Number(searchParams.get("limit") ?? 12);
        const genre = Number(searchParams.get("genre") ?? 0);
        const search = searchParams.get("search") ?? "";

        const result = await getShopProducts({
            page,
            limit,
            genre,
            search
        });

        return NextResponse.json(result);

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch albums" },
            { status: 500 }
        );
    }
}