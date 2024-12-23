import axios from 'axios'
import env from '@/helpers/env'
import OpenAi from 'openai'

const baseURL = 'https://api.zukijourney.com/v1'
const apiKey = env.OPENAI

const client = new OpenAi({
  baseURL: baseURL,
  apiKey: apiKey,
})

const messages = [
  {
    role: 'system',
    content: '',
  },
  {
    role: 'user',
    content: '',
  },
]

async function sendMessage() {
  try {
    const response = await axios.post(
      `${baseURL}/your-endpoint`,
      { messages },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )
    console.log('Response:', response.data)
  } catch (error) {
    console.error('Error sending message:', error)
  }
}

sendMessage()
