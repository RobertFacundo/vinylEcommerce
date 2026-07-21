import { AnimatePresence, motion } from 'framer-motion'
import { useCartStore } from '../../store/cartStore'
import CartItemRow from './CartItemRow'
import { Trash2 } from 'lucide-react'

const CartItems = () => {
  const cartItems = useCartStore(state => state.cartItems)
  const clearCart = useCartStore(state => state.clearCart)
  return (
    <div
      className='
        w-full
        lg:w-2/3
        px-0
        lg:px-5
        h-full
        overflow-y-auto
        lenis-prevent
      '
    >
      <div
        className='
          hidden
          lg:grid
          sticky
          top-0
          bg-[#efe0d5]
          grid-cols-[1fr_140px_160px_140px_60px]
          border-b
          border-[#391d08]/20
          pb-3
          font-[family-name:var(--font-geist-mono)]
        '
      >
        <span className='text-left pl-3'>Product</span>
        <span className='text-left'>Price</span>
        <span className='text-center'>Quantity</span>
        <span className='text-center'>Total</span>
        <button
          onClick={clearCart}
          className='
        hover:text-[#C89268]
        transition-colors
        cursor-pointer
    '
        >
          <Trash2 size={16} />
        </button>
      </div>
      <AnimatePresence>
        {cartItems.map(item => (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            exit={{
              opacity: 0,
              x: 50
            }}
            transition={{
              duration: 0.3
            }}
          >
            <CartItemRow key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default CartItems
