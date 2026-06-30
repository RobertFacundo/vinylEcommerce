import { NextResponse } from "next/server";

type Params = Promise<{
    id: string;
}>;

export async function GET(
    _req: Request,
    { params }: { params: Params }
) {
    const { id } = await params;

    const res = await fetch(
        `https://api.deezer.com/album/${id}`
    );

    if (!res.ok) {
        return NextResponse.json(
            { error: "Album not found" },
            { status: res.status }
        );
    }

    const data = await res.json();

    return NextResponse.json(data);
}