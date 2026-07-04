import { api } from "@/shared/api/axios";
import { ProductsResponse } from "../types/product";

export const getProducts = async (page: number, genre:number, searchQuery:string) => {
    const res = await api.get<ProductsResponse>(`/shop?page=${page}&genre=${genre}&search=${searchQuery}`);

    return res.data
}