import { SearchIcon } from "lucide-react";

type SearchProps = {
    searchQuery: string,
    setSearchQuery: (value: string) => void;
}

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
    return (
        <div className="flex items-center gap-2 w-full h-11 px-3 rounded-xl border
                       border-[#C89268] bg-transparent transition focus-within:border-[#C89268]"
        >
            <SearchIcon className="w-2 h-2 opacity-90 text-black" />

            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search albums..."
                className=" flex-1 bg-transparent outline-none text-sm placeholder:text-black/40 "
            />
        </div>
    )
};

export default Search;