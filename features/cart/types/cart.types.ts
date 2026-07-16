import { ProductType } from "@/features/shop/types/product";

export type CartItem = ProductType & {
    quantity: number;
}

export type CartState = {
    cartItems: CartItem[];
};

export type CartActions = {
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: number) => void;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
};