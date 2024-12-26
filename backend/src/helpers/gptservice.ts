import env from '@/helpers/env'
import OpenAI from 'openai'

const client = new OpenAI({
  baseURL: 'https://api.zukijourney.com/v1',
  apiKey: env.OPENAI,
})

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export async function sendMessage(message: string) {
  const msg: ChatMessage[] = [
    {
      role: 'system',
      content: 'Ты Cupid AI и твоя задача помогать в делах любовных',
    },
    {
      role: 'user',
      content: `hi, ${message}`,
    },
  ]
  try {
    const response = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: msg,
      temperature: 1,
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error sending message:', error)
  }
}
