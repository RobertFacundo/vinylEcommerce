import Image from "next/image";
import { CategoriesSectionDataType } from "@/shared/data/CategoriesSectionData";
import { PiArrowSquareRightLight } from "react-icons/pi";

type CategoryCardProps = {
    cat: CategoriesSectionDataType
}

const CategoryCard = ({ cat }: CategoryCardProps) => {
    const { cover, title } = cat;
    return (
        <div className="flex flex-col bg-[#eccfb884] rounded-sm transition-all ease-in-out duration-800 hover:scale-105">
            <Image src={cover} alt={title} className="w-full h-auto rounded-sm" />
            <div className="flex flex-row gap-2 justify-between px-3 py-4 items-center">
                <h1 className="font-[family-name:var(--font-geist-mono)] tracking-tight text-sm font-medium">{title}</h1>
                <button className=" hover:scale-105 cursor-pointer"><PiArrowSquareRightLight className="w-6 h-6"/></button>
            </div>
        </div>
    )
};

export default CategoryCard;