import { genres } from "@/shared/data/genres";

type FiltersProps = {
    filter: number,
    setFilter: React.Dispatch<React.SetStateAction<number>>;
}

const Filters = ({ filter, setFilter }: FiltersProps) => {
    return (
        <div className="flex flex-col gap-4 w-full ml-4">
            {genres.map(genre => (
                <button
                    key={genre.id}
                    onClick={() => setFilter(genre.id)}
                    className={` w-full max-w-[160px]
                        px-4 py-2 rounded-full border text-sm transition
                        ${filter === genre.id
                            ? "bg-black text-white"
                            : "bg-transparent hover:bg-black/10"
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