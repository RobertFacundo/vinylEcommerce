import { NextResponse } from "next/server";
import { getRecommendationsByArtist } from "@/features/detail/api/deezer.service";


export async function GET(req:Request){

    const {searchParams}=new URL(req.url);

    const artistName = searchParams.get("artist") ?? "";
    const exclude = Number(searchParams.get("exclude"));

    const recommendations = await getRecommendationsByArtist(
        artistName,
        exclude
    );

    return NextResponse.json(recommendations);
}