"use client"
import { getProducts } from "../api/products.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page: number, genre:number, searchQuery:string) => {
    return useQuery({
        queryKey: ["products", page, genre, searchQuery],
        queryFn: () => getProducts(page, genre, searchQuery),
    });
};