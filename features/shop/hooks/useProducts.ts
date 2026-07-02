"use client"
import { getProducts } from "../api/products.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page: number) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => getProducts(page),
    });
};