import { NextResponse } from "next/server";

type Params = Promise<{
    id: string;
}>;

export async function GET(
    _req: Request,
    { params }: { params: Params }
) {
    const { id } = await params;

    console.log("ID RECEIVED:", id);

    const res = await fetch(
        `https://api.deezer.com/album/${id}`
    );

    const data = await res.json();

    console.log("STATUS:", res.status);
    console.log("DATA:", data);

    return NextResponse.json(data);
}