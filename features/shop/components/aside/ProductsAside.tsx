"use client"
import Search from "./Search";
import Filters from "./Filters";
import { useRef } from "react";
import { useAsideAnimation } from "../../animations/useAsideAnimation";

type Props = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    filter: number;
    setFilter: (value: number) => void;
};

const ProductsAside = ({
    searchQuery,
    setSearchQuery,
    filter,
    setFilter,
}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useAsideAnimation(ref)
    return (
        <aside ref={ref} className="md:w-[190px] w-full flex flex-col gap-3 shrink-0">
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <Filters
                filter={filter}
                setFilter={setFilter}
            />
        </aside>
    );
};

export default ProductsAside;