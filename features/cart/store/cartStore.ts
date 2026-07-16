import { create } from 'zustand';
import { CartActions, CartState } from '../types/cart.types';

type CartStore = CartState & CartActions;

export const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    addToCart: () => { },
    removeFromCart: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    clearCart: () => { },
}));