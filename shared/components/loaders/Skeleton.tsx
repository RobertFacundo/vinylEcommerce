type SkeletonProps = {
    className?: string;
};

const Skeleton = ({ className = "" }: SkeletonProps) => {
    return (
        <div className={`animate-pulse bg-black/10 rounded-md ${className}`} />
    );
};

export default Skeleton;