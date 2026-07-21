'use client'
import ChatToggleButton from './ChatToggleButton'
import { useState } from 'react'
import ChatWindow from './ChatWindow'
import { AnimatePresence, motion } from 'framer-motion'
import { useAIChat } from '../hooks/useAIChat'

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { messages, sendMessage, isLoading } = useAIChat()

  return (
    <div className='fixed bottom-8 right-8 z-[9999] '>
      <div className='relative'>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{
                duration: 0.25,
                ease: 'easeOut'
              }}
              className='absolute bottom-11 right-7'
            >
              <ChatWindow
                messages={messages}
                onSendMessage={sendMessage}
                isLoading={isLoading}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <ChatToggleButton
          isOpen={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        />
      </div>
    </div>
  )
}

export default AIChat
