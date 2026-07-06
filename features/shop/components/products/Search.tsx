import { FaSearch } from "react-icons/fa";

type SearchProps = {
    searchQuery: string,
    setSearchQuery: (value: string) => void;
}

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
    return (
        <div className="flex items-center gap-2 h-11 px-3 rounded-xl border
                       border-[#C89268] bg-transparent transition focus-within:border-[#C89268]"
        >
            <div className="shrink-0">
                <FaSearch size={20} className="text-black/70" />
            </div>

            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search albums..."
                className="bg-transparent outline-none text-sm placeholder:text-black/40 font-[family-name:var(--font-geist-mono)]"
            />
        </div>
    )
};

export default Search;