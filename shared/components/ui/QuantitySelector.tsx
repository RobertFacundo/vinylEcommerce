import { Minus, Plus } from "lucide-react";

interface Props {
    quantity: number;
    onChange: (value: number) => void;
}

const QuantitySelector = ({ quantity, onChange }: Props) => {
    return (
        <div className="flex flex-row gap-2 p-2 items-center justify-center">

            <div className="flex w-fit overflow-hidden rounded-md border border-[#C89268]">
                <button
                    onClick={() => onChange(Math.max(1, quantity - 1))}
                    className="cursor-pointer p-3 transition-colors hover:bg-[#C89268] hover:text-white"
                >
                    <Minus size={18} />
                </button>

                <div className="flex w-14 items-center justify-center border-x border-[#C89268] font-semibold">
                    {quantity}
                </div>

                <button
                    onClick={() => onChange(quantity + 1)}
                    className="cursor-pointer p-3 transition-colors hover:bg-[#C89268] hover:text-white"
                >
                    <Plus size={18} />
                </button>
            </div>
        </div>
    )
};

export default QuantitySelector;