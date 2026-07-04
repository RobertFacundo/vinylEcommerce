import Search from "./Search";
import Filters from "../filters/Filters";

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
    return (
        <aside className="flex md:flex-col gap-3 md:items-start">
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