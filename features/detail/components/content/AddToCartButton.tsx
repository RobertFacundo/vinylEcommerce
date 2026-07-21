import { Check, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

interface Props {
  onAddToCart: () => void
}

const AddToCartButton = ({ onAddToCart }: Props) => {
  const [added, setAdded] = useState(false)

  const handleClick = () => {
    onAddToCart()
    setAdded(true)

    setTimeout(() => {
      setAdded(false)
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      className='
                flex items-center justify-center gap-2
                w-full
                rounded-md
                border border-[#C89268]
                bg-[#C89268]
                px-6 py-3
                text-white
                font-medium
                transition-all duration-300
                hover:bg-transparent
                hover:text-[#C89268]
                cursor-pointer
            '
    >
      {added ? (
        <>
          <Check size={18} />
          Added
        </>
      ) : (
        <>
          <ShoppingCart size={18} />
          Add to cart
        </>
      )}
    </button>
  )
}

export default AddToCartButton
