import { CategoriesSectionData } from "@/shared/data/CategoriesSectionData";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

const CategoriesSection = () => {
    return (
        <section className="px-6 md:px-12 py-20">
            <div className="flex flex-col max-w-6xl mx-auto gap-4">
                <span className="mb-5 text-[#C89268] text-sm font-semibold">BROWSE CATEGORIES</span>
                <div className="flex flex-row justify-between ">
                    <h1 className="font-[family-name:var(--font-alegreya)] text-6xl font-light">Find Your vibe</h1>
                    <button className="font-[family-name:var(--font-geist-mono)] tracking-tight font-normal flex items-center cursor-pointer transition-all ease-in-out duration-500 hover:scale-105">View All Collections<span className="px-2"><RxDoubleArrowRight /></span></button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {CategoriesSectionData.map(cat => (
                        <Link href={`/shop?genre=${cat.title}`} key={cat.title}>
                            <CategoryCard cat={cat} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default CategoriesSection;