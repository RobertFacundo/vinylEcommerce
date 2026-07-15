import CartInfo from "./CartInfo"
import CartItems from "./CartItems"

const CartSection = () => {
    return (
        <div className="flex md:flex-row flex-col">
            <CartItems />
            <CartInfo />
        </div>
    )
};

export default CartSection;