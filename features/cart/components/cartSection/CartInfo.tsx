import { useCartStore } from '../../store/cartStore'
import AnimatedNumber from '@/shared/components/ui/AnimatedNumber'

const CartInfo = () => {
  const cartItems = useCartStore(state => state.cartItems)
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  )
  const shipping = 10

  const total = subtotal + shipping

  return (
    <div
      className='
    w-full
    lg:w-1/3
    mt-5
    flex
    flex-col
    gap-5
    font-[family-name:var(--font-geist-mono)]
    bg-[#ffffffd9]
    p-4
    rounded-sm
    h-fit
    lg:h-[250px]
    lg:m-5
  '
    >
      <h1 className='text-2xl mb-6 leading-[1.05] font-[family-name:var(--font-alegreya)] font-semibold'>
        Order summary
      </h1>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <span>Subtotal:</span>
          <AnimatedNumber value={subtotal.toFixed(2)} />
        </div>

        <div className='flex justify-between'>
          <span>Shipping:</span>
          <AnimatedNumber value={shipping.toFixed(2)} />
        </div>

        <hr />

        <div className='flex justify-between font-semibold text-xl'>
          <span>Total:</span>
          <AnimatedNumber value={total.toFixed(2)} />
        </div>
      </div>
    </div>
  )
}

export default CartInfo
