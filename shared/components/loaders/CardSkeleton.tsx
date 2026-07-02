import Skeleton from "./Skeleton";

const CardSkeleton = () => {
    return (
        <div className="w-[250px]">
            <Skeleton className="w-full aspect-[3/2]" />

            <div className="px-3 py-3 flex flex-col gap-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <Skeleton className="h-4 w-1/3" />
            </div>

        </div>
    );
};

export default CardSkeleton;