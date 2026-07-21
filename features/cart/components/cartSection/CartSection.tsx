import { useCartAnimation } from '../../animations/useCartAnimation'
import CartInfo from './CartInfo'
import CartItems from './CartItems'
import { useRef } from 'react'

const CartSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  useCartAnimation(ref)
  return (
    <div ref={ref} className='cart-section flex flex-col p-12'>
      <h1 className='cart-title text-7xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold'>
        Your Cart
      </h1>
      <div className='cart-container flex md:flex-row flex-col p-10 bg-[#efe0d5] rounded-l h-[500px]'>
        <CartItems />
        <CartInfo />
      </div>
    </div>
  )
}

export default CartSection
