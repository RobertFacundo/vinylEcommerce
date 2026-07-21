import QuantitySelector from '@/shared/components/ui/QuantitySelector'
import Image from 'next/image'
import { CartItem } from '../../types/cart.types'
import { useCartStore } from '../../store/cartStore'
import AnimatedNumber from '@/shared/components/ui/AnimatedNumber'

interface Props {
  item: CartItem
}

const CartItemRow = ({ item }: Props) => {
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const removeFromCart = useCartStore(state => state.removeFromCart)

  return (
    <div
      className='
    flex flex-col
    lg:grid
    lg:grid-cols-[1fr_140px_160px_140px_60px]
    gap-4
    lg:gap-0
    border-b
    border-[#391d08]/20
    p-4
    items-center
    font-[family-name:var(--font-alegreya)]
  '
    >
      <div className='flex gap-4 items-center p-2'>
        {/* imagen */}
        <Image
          src={item.cover}
          alt={item.title}
          width={120}
          height={120}
          className='rounded'
        />

        <div className='flex flex-col gap-3'>
          <h3 className='text-xl'>{item.title}</h3>
          <p>{item.band}</p>
        </div>
      </div>
      <span className='text-2xl lg:text-left w-full'>${item.price}</span>

      <div className='flex justify-center lg:justify-center w-full'>
        <QuantitySelector
          quantity={item.quantity}
          onChange={value => updateQuantity(item.id, value)}
        />
      </div>

      <span className='text-center text-2xl overflow-hidden'>
        $
        <AnimatedNumber
          value={(Number(item.price) * item.quantity).toFixed(2)}
        />
      </span>

      <button
        onClick={() => removeFromCart(item.id)}
        className='
    w-full
    lg:w-auto
    text-left
    lg:text-center
    text-3xl
    hover:text-[#C89268]
    transition-colors
    cursor-pointer
  '
      >
        ×
      </button>
    </div>
  )
}

export default CartItemRow
