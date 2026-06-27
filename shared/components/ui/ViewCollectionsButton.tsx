import { RxDoubleArrowRight } from "react-icons/rx";

const ViewCollectionsButton = () => {
    return (
        <button className="font-[family-name:var(--font-geist-mono)] md:text-2xl text-xs tracking-tight font-normal flex items-center cursor-pointer transition-all ease-in-out duration-500 hover:scale-105">
            View All Collections
            <span className="px-2">
                <RxDoubleArrowRight />
            </span>
        </button>
    );
};

export default ViewCollectionsButton;