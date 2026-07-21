import ChatBubble from './ChatBubble'
import ChatLoading from './ChatLoading'
import { Message } from '../types/ai.types'
import { useEffect, useRef } from 'react'

interface Props {
  messages: Message[]
  isLoading: boolean
}

const ChatMessages = ({ messages, isLoading }: Props) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages, isLoading])

  return (
    <div
      data-lenis-prevent
      className='flex-1 p-4 overflow-y-auto font-[family-name:var(--font-geist-mono)] bg-[#faf7f4e3]'
    >
      {messages.map((message, index) => (
        <ChatBubble key={index} role={message.role} message={message.content} />
      ))}
      {isLoading && <ChatLoading />}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatMessages
