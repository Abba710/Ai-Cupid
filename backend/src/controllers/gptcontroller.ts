import { Controller, Post, Body } from 'amala'
import { sendMessage } from '@/helpers/gptservice'

interface RequestBody {
  message: string
}

@Controller('/service')
export default class GetGptController {
  @Post('/')
  async getGptService(@Body() body: RequestBody) {
    console.log('Received body:', body) // Выводим весь body
    const message = 'ПРИВТЕТ! как знакомиться с противоположным полом'
    console.log('Extracted message:', message) // Выводим извлеченное сообщение

    if (!message) {
      return { error: 'Prompt is required' }
    }

    const data = await sendMessage(message)
    console.log('Response:', data)
    return data
  }
}
