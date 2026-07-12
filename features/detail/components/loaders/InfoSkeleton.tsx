import Skeleton from "@/shared/components/loaders/Skeleton";

const InfoSkeleton = () => {
    return (
        <div className="flex flex-col gap-8 mt-3">

            <div className="space-y-3 border-b pb-2 border-[#C89268]/30">

                {/* Back */}
                <Skeleton className="h-4 w-28" />

                {/* Genre */}
                <Skeleton className="h-4 w-20" />

                {/* Title */}
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-10/12" />

                {/* Artist */}
                <Skeleton className="h-6 w-40" />

                {/* Price */}
                <Skeleton className="h-8 w-24 mt-4" />
            </div>

            <div className="space-y-4">

                <div className="flex items-center gap-3">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-5 w-56" />
                </div>

                <div className="flex items-center gap-3">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-5 w-48" />
                </div>

                <div className="flex items-center gap-3">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-5 w-52" />
                </div>

                <div className="flex items-center gap-3">
                    <Skeleton className="size-5 rounded-full" />
                    <Skeleton className="h-5 w-60" />
                </div>

            </div>

        </div>
    );
};

export default InfoSkeleton;