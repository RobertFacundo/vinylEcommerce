type SearchProps = {
    searchQuery: string,
    setSearchQuery:  (value: string) => void;
}

const Search = ({ searchQuery, setSearchQuery }: SearchProps) => {
    return (
        <div className="w-full">
            <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search albums..."
                className="
                    w-full
                    px-4 py-2
                    rounded-md
                    border
                    outline-none
                    focus:ring-2
                    focus:ring-black/30
                    transition
                "
            />
        </div>
    )
};

export default Search;