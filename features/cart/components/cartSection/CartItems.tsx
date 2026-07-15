import CartItemRow from "./CartItemRow";

const CartItems = () => {
    return (
        <div className="w-2/3">
            <h1>Your Cart</h1>
            <div className="grid grid-cols-[1fr_100px_120px_100px] border-b pb-3">
                <span>Product</span>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Total</span>
            </div>
        </div>
    )
};

export default CartItems;