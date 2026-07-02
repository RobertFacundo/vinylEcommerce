"use client"
import { useProducts } from "../../hooks/useProducts";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Loader from "./Loader";

const ProductsSection = () => {
    const [page, setPage] = useState(1);
    const { data: products, isLoading } = useProducts(page);
    console.log(products);

    if (isLoading) {
        return (
            <Loader />
        );
    }

    if (!products) {
        return null;
    }
    return (
        <section className="w-full bg-[#e8cbb589]">
            <div className=" max-w-7xl mx-auto px-6">
                <Pagination currentPage={page} totalPages={products?.totalPages} onPageChange={setPage} />
                <div className="grid grid-cols-1 md:grid-cols-4 mx-auto gap-12">
                    {products.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                <Pagination currentPage={products.currentPage} totalPages={products?.totalPages} onPageChange={setPage} />
            </div>
        </section>
    )
};

export default ProductsSection;