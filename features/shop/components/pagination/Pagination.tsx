"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import PaginationButton from "./PaginationButton";
import { useRef } from "react";
import { usePaginationAnimation } from "../../animations/usePaginationAnimation";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const ref = useRef<HTMLDivElement>(null)
    usePaginationAnimation(ref)
    return (
        <div ref={ref} className="opacity-0 flex justify-center items-center gap-4 my-6 font-[family-name:var(--font-geist-mono)]">
            <PaginationButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} icon={<ChevronLeft size={18} />}>Previous</PaginationButton>

            <div className="spans-container flex flex-col items-center leading-tight">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    Page
                </span>

                <span className="font-semibold text-lg tracking-wide">
                    {currentPage}
                    <span className="mx-2 text-neutral-400">/</span>
                    {totalPages}
                </span>
            </div>

            <PaginationButton disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} icon={<ChevronRight size={18} />} iconPosition="right">
                Next
            </PaginationButton>
        </div>
    )
};

export default Pagination;