import QuantitySelector from "@/shared/components/ui/QuantitySelector";
import AddToCartButton from "./AddToCartButton";
import { Album } from "../../types/album";
import { useState } from "react";

const Controls = ({ album }: { album: Album }) => {
    const [quantity, setQuantity] = useState(1)
    return (
        <div className="flex flex-col gap-3 mt-3">
            <QuantitySelector quantity={quantity} onChange={setQuantity} />
            <AddToCartButton album={album} quantity={quantity} />
        </div>
    )
};

export default Controls;