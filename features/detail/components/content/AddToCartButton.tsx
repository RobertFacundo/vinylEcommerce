import { Album } from "../../types/album";
import { ShoppingCart } from "lucide-react";

interface Props {
    album: Album;
    quantity: number;
}

const AddToCartButton = ({ album, quantity }: Props) => {
    return (
         <button
            className="
                flex items-center justify-center gap-2
                w-full
                rounded-md
                border border-[#C89268]
                bg-[#C89268]
                px-6 py-3
                text-white
                font-medium
                transition-all duration-300
                hover:bg-transparent
                hover:text-[#C89268]
                cursor-pointer
            "
        >
            <ShoppingCart size={18} />

            Add to cart
        </button>
    )
};

export default AddToCartButton;