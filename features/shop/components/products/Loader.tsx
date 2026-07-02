import CardSkeleton from "@/shared/components/loaders/CardSkeleton"

const Loader = () => {
    return (
        <section className="w-full bg-[#e8cbb589] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Loader;