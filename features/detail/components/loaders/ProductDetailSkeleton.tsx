import Skeleton from "@/shared/components/loaders/Skeleton";
import InfoSkeleton from "./InfoSkeleton";

const ProductDetailSkeleton = () => {
    return (
        <div className="flex flex-col-reverse md:flex-col gap-10 lg:flex-row p-5 border-b border-[#C89268]/30">
            <div className="lg:w-2/4">
                <Skeleton className="w-10/12 aspect-square rounded-lg mx-auto" />
            </div>

            <div className="lg:w-2/4">
                <InfoSkeleton />
            </div>
        </div>
    );
};

export default ProductDetailSkeleton;