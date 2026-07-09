import { genres } from "@/shared/data/genres";

type FiltersProps = {
    filter: number,
    setFilter: (value: number) => void;
}

const Filters = ({ filter, setFilter }: FiltersProps) => {
    return (
        <div className="filters w-full
        rounded-xl
        overflow-hidden
        border
        border-[#C89268]
        bg-transparent">
            {genres.map(genre => (
                <button
                    key={genre.id}
                    onClick={() => setFilter(genre.id)}
                    className={` filter-button
        w-full
        h-11
        px-4
        flex
        items-center
        text-left
        text-sm
        border-b
        border-[#C89268]
        last:border-b-0
        transition-colors
        cursor-pointer
        font-[family-name:var(--font-geist-mono)]
        ${filter === genre.id
                            ? "bg-[#C89268] text-white"
                            : "hover:bg-[#C89268]/30"
                        }
    `}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    )
};

export default Filters;