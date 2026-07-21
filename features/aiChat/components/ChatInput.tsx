'use client'
import { Send } from 'lucide-react'
import { useState } from 'react'

interface Props {
  onSend: (message: string) => void
}

const ChatInput = ({ onSend }: Props) => {
  const [message, setMessage] = useState('')
  const handleSubmit = () => {
    if (!message.trim()) return

    onSend(message)
    setMessage('')
  }
  return (
    <div className='p-3 border-t border-[#C89268]/20 bg-[#faf7f4ef]'>
      <div className='flex items-center gap-2'>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
          className='
            flex-1
            rounded-full
            border
            border-[#cb6d26ab]
            px-4
            py-2
            outline-none
            font-[family-name:var(--font-geist-mono)]
            text-[11px]
          '
          placeholder='Ask for an album...'
        />

        <button
          onClick={handleSubmit}
          className='
            rounded-full
            p-2
            bg-[#C89268]
            text-white
            hover:scale-105
            transition
          '
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default ChatInput
