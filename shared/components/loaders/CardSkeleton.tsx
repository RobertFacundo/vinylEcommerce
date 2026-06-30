const CardSkeleton = () => {
    return (
        <div className="w-[250px]">
            <div className="relative w-full aspect-[3/2] bg-black/10 animate-pulse rounded-md" />

            <div className="px-3 py-3 flex flex-col gap-2">
                <div className="h-4 w-3/4 bg-black/10 rounded" />
                <div className="h-3 w-1/2 bg-black/10 rounded" />
                <div className="h-4 w-1/3 bg-black/10 rounded" />
            </div>
        </div>
    );
};

export default CardSkeleton;