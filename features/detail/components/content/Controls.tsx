import QuantitySelector from '@/shared/components/ui/QuantitySelector'
import AddToCartButton from './AddToCartButton'
import { Album } from '../../types/album'
import { useState } from 'react'
import { useCartStore } from '@/features/cart/store/cartStore'
import { albumToProduct } from '@/features/cart/utils/albumMapper'

const Controls = ({ album }: { album: Album }) => {
  const [quantity, setQuantity] = useState(1)

  const addToCart = useCartStore(state => state.addToCart)

  return (
    <div className='flex flex-col gap-3 mt-3'>
      <QuantitySelector quantity={quantity} onChange={setQuantity} />
      <AddToCartButton
        onAddToCart={() => addToCart(albumToProduct(album), quantity)}
      />
    </div>
  )
}

export default Controls
