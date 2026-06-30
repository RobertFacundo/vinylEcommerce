"use client"
import { CategoriesSectionData } from "@/shared/data/CategoriesSectionData";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import ViewCollectionsButton from "@/shared/components/ui/ViewCollectionsButton";
import SectionTitle from "@/shared/components/ui/SectionTitle";
import SectionH1 from "@/shared/components/ui/SectionH1";
import { useRef } from "react";
import { useCategoriesSection } from "../../animations/useCategoriesSection";

const CategoriesSection = () => {
    const ref = useRef<HTMLDivElement>(null);

    useCategoriesSection(ref)
    return (
        <section ref={ref} className="px-6 md:px-12 py-20">
            <div className="flex flex-col max-w-6xl mx-auto gap-4">
                <SectionTitle title="BROWSE CATEGORIES" />
                <div className="heading flex flex-row justify-between ">
                    <SectionH1 title="Find Your Vibe" />
                    <ViewCollectionsButton />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
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