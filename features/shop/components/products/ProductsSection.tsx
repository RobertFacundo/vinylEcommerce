"use client"
import { useProducts } from "../../hooks/useProducts";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useState } from "react";
import CardSkeleton from "@/shared/components/loaders/CardSkeleton";
import Filters from "../filters/Filters";

const ProductsSection = () => {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState(0)
    const { data: products, isLoading } = useProducts(page, filter);

    return (
        <section className="w-full bg-[#e8cbb589]">
            <div className=" max-w-8xl mx-auto px-6">
                <Pagination currentPage={products?.currentPage ?? page} totalPages={products?.totalPages ?? 1} onPageChange={setPage} />
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mt-6 ">
                    <aside className="flex md:flex-col gap-3 md:items-start">
                        <Filters filter={filter} setFilter={(value) => { setFilter(value); setPage(1); }} />
                    </aside>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {isLoading || !products
                            ? Array.from({ length: 12 }).map((_, i) => (
                                <CardSkeleton key={i} />
                            ))
                            : products.products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </div>
                </div>
                <Pagination currentPage={products?.currentPage ?? page} totalPages={products?.totalPages ?? 1} onPageChange={setPage} />
            </div>
        </section>
    )
};

export default ProductsSection;