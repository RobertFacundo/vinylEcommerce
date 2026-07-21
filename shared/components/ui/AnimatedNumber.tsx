import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  value: string | number
}

const AnimatedNumber = ({ value }: Props) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.span
        key={value}
        initial={{
          opacity: 0,
          y: 8
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          y: -8
        }}
        transition={{
          duration: 0.2
        }}
      >
        {value}
      </motion.span>
    </AnimatePresence>
  )
}

export default AnimatedNumber
