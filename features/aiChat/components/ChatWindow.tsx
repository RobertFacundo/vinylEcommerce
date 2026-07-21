import ChatHeader from './ChatHeader'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import { Message } from '../types/ai.types'

interface Props {
  messages: Message[]
  onSendMessage: (message: string) => void
  isLoading: boolean
}

const ChatWindow = ({ messages, onSendMessage, isLoading }: Props) => {
  return (
    <div className='mb-1 w-[370px] md:w-[600px] max-h-[500px] rounded-xl  shadow-2xl border border-[#C89268]/30 flex flex-col overflow-hidden'>
      <ChatHeader />
      <ChatMessages messages={messages} isLoading={isLoading} />

      <ChatInput onSend={onSendMessage} />
    </div>
  )
}

export default ChatWindow
