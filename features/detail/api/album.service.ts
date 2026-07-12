import { api } from "@/shared/api/axios";
import { getRandomPrice } from "@/shared/utils/getRandomPrice";

export const getAlbumById = async (id: number) => {
    console.log("Fetching album:", id);
    const res = await api.get(`/album/${id}`);
    console.log("Response:", res.data);
    if (res.data?.error) {
        throw new Error("Invalid album");
    }

    return { ...res.data, price: getRandomPrice() };
}