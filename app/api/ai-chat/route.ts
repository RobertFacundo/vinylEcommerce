import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { vinylAIPrompt } from '@/features/aiChat/prompts/vinylAI.prompt'

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1'
})

export async function POST (req: Request) {
  try {
    const { messages } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'llama-3.1-8b-instant',
      messages: [
        {
          role: 'system',
          content: vinylAIPrompt
        },
        ...messages
      ]
    })

    const aiMessage = completion.choices[0].message.content

    return NextResponse.json({
      message: aiMessage ?? 'I could not generate a response'
    })
  } catch (error) {
    console.error('OPENAI ERROR:', error)
    return NextResponse.json(
      {
        message: 'AI service unavailable'
      },
      {
        status: 500
      }
    )
  }
}
