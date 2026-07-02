type SkeletonProps = {
    className?: string;
};

const Skeleton = ({ className = "" }: SkeletonProps) => {
    return (
        <div className={`animate-pulse bg-white/50 rounded-md ${className}`} />
    );
};

export default Skeleton;