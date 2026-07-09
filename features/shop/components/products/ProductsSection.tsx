"use client"
import { useProducts } from "../../hooks/useProducts";
import Pagination from "../pagination/Pagination";
import ProductGrid from "./ProductsGrid";
import { useState } from "react";
import ProductsAside from "../aside/ProductsAside";

const ProductsSection = () => {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("")
    const [filter, setFilter] = useState(0)
    const { data: products, isLoading } = useProducts(page, filter, searchQuery);

    return (
        <section className="w-full bg-[#e8cbb589] border-b border-[#eea97488]/50">
            <div className=" max-w-8xl mx-auto px-6">
                <Pagination currentPage={products?.currentPage ?? page} totalPages={products?.totalPages ?? 1} onPageChange={setPage} />
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 mt-6 ">
                    <ProductsAside searchQuery={searchQuery}
                        setSearchQuery={(v) => {
                            setSearchQuery(v);
                            setPage(1);
                        }}
                        filter={filter}
                        setFilter={(v) => {
                            setFilter(v);
                            setPage(1);
                        }} />
                    <ProductGrid isLoading={isLoading} products={products} />
                </div>
                <Pagination currentPage={products?.currentPage ?? page} totalPages={products?.totalPages ?? 1} onPageChange={setPage} />
            </div>
        </section>
    )
};

export default ProductsSection;