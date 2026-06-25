import { api } from "@/shared/api/axios";

export const getAlbumById = async (id: number) => {
    const res = await api.get(`/album/${id}`);
    if (res.data?.error) {
        throw new Error("Invalid album");
    }

    return res.data;
}