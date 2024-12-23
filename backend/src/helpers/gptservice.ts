import axios from 'axios'
import env from '@/helpers/env'

const baseURL = 'https://api.zukijourney.com/v1'
const apiKey = env.OPENAI

export async function sendMessage(message: string) {
  const settings = [
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
    const response = await axios.post(
      baseURL, // URL for GPT-4 API
      {
        model: 'gpt-4o-mini',
        settings,
        temperature: 1,
        max_tokens: 150,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    console.log('Response:', response.data)
    return response.data
  } catch (error) {
    console.error('Error sending message:', error)
  }
}
