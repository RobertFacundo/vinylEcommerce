import { api } from "@/shared/api/axios";
import { Recommendation } from "../types/recommendations";

export const getRecommendations = async (
    artistName: string,
    currentAlbumId: number
): Promise<Recommendation[]> => {

    const res = await api.get<Recommendation[]>(
        `/recommendations?artist=${encodeURIComponent(artistName)}&exclude=${currentAlbumId}`
    );

    return res.data;
}