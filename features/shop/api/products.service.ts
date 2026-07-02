import { api } from "@/shared/api/axios";
import { ProductsResponse } from "../types/product";

export const getProducts = async (page: number) => {
    const res = await api.get<ProductsResponse>(`/shop?page=${page}`);

    return res.data
}