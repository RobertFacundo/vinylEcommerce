import QuantitySelector from "@/shared/components/ui/QuantitySelector";
import Image from "next/image";

const CartItemRow = () => {
    return (
        <div className="grid grid-cols-[1fr_100px_120px_100px] items-center border-b">
            <div className="flex gap-4 items-center">
                {/* imagen */}
                <h3>title</h3>
                <p>band</p>
            </div>
            <span className="text-center">$24.99</span>

            <div className="flex justify-center">
                {/* <QuantitySelector /> */}
            </div>

            <span className="text-right">$49.98</span>
        </div>
    )
};

export default CartItemRow;