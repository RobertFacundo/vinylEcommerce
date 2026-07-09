import { api } from "@/shared/api/axios";
import { getRandomPrice } from "@/shared/utils/getRandomPrice";

export const getAlbumById = async (id: number) => {
    const res = await api.get(`/album/${id}`);
    if (res.data?.error) {
        throw new Error("Invalid album");
    }

    return { ...res.data, price: getRandomPrice() };
}