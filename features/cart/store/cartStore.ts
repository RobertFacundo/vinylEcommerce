import { create } from 'zustand'
import { CartActions, CartState } from '../types/cart.types'
import { persist } from 'zustand/middleware'

type CartStore = CartState & CartActions

export const useCartStore = create<CartStore>()(
  persist(
    set => ({
      cartItems: [],
      addToCart: (product, quantity) => {
        set(state => {
          const existingItem = state.cartItems.find(
            item => item.id === product.id
          )
          if (existingItem) {
            return {
              cartItems: state.cartItems.map(item =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + quantity
                    }
                  : item
              )
            }
          }
          return {
            cartItems: [
              ...state.cartItems,
              {
                ...product,
                quantity
              }
            ]
          }
        })
      },
      removeFromCart: id => {
        set(state => {
          return {
            cartItems: state.cartItems.filter(item => item.id !== id)
          }
        })
      },
      increaseQuantity: id => {
        set(state => {
          return {
            cartItems: state.cartItems.map(item =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1
                  }
                : item
            )
          }
        })
      },
      decreaseQuantity: id => {
        set(state => {
          return {
            cartItems: state.cartItems
              .map(item =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity - 1
                    }
                  : item
              )
              .filter(item => item.quantity > 0)
          }
        })
      },
      updateQuantity: (id, quantity) => {
        set(state => ({
          cartItems: state.cartItems.map(item =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, quantity)
                }
              : item
          )
        }))
      },
      clearCart: () => {
        set(() => ({
          cartItems: []
        }))
      }
    }),
    { name: 'cart-storage' }
  )
)
