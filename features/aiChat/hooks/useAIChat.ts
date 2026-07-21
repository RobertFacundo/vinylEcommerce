import { useState } from 'react'
import { Message } from '../types/ai.types'
import { sendAIMessage } from '../services/aiServices'

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'What kind of music would you like to hear?'
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async (content: string) => {
    const updatedMessages: Message[] = [
      ...messages,
      {
        role: 'user',
        content
      }
    ]
    setMessages(updatedMessages)

    setIsLoading(true)

    try {
      // acá va OpenAI
      const response = await sendAIMessage(updatedMessages)

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response.message
        }
      ])
    } catch (error) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again.'
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return {
    messages,
    sendMessage,
    isLoading
  }
}
