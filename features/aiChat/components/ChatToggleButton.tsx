import { Bot, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  onClick: () => void
  isOpen: boolean
}

const ChatToggleButton = ({ onClick, isOpen }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
    flex items-center justify-center gap-2
    px-5 py-2
    rounded-full
    border
    transition-all duration-500
    w-[160px]
    cursor-pointer
    ${
      isOpen
        ? `
          bg-white
          border-[#C89268]/40
          text-[#C89268]
          shadow-none
          text-xs
        `
        : `
          bg-[#faf7f4]
          border-[#C89268]
          text-[#C89268]
          shadow-lg
          hover:scale-105
          hover:shadow-xl
          hover:bg-[#f8f1ea]
        `
    }
  `}
    >
      <AnimatePresence mode='wait'>
        {isOpen ? (
          <motion.div
            key='close'
            className='flex items-center gap-2'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <X size={22} />
            Keep Searching
          </motion.div>
        ) : (
          <motion.div
            key='ask'
            className='flex items-center gap-2'
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            <Bot size={22} />
            Ask Vinyl AI
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default ChatToggleButton
