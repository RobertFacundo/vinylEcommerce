import { Message } from '../types/ai.types'

export const sendAIMessage = async (messages: Message[]) => {
  const url = `${window.location.origin}/api/ai-chat`

  console.log('Calling:', url)
  const response = await fetch('/api/ai-chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages
    })
  })
  if (!response.ok) {
    throw new Error('AI request failed')
  }

  return response.json()
}
