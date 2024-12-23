import { Controller, Get, Query } from 'amala'
import { sendMessage } from '@/helpers/gptservice'

@Controller('/service')
export default class GetGptContoller {
  @Get('/')
  async getGptService(@Query('message') message?: string) {
    if (!message) {
      return { error: 'Prompt is required' }
    }
    const data = await sendMessage(message)

    // Возвращаем результат от GPT-4
    console.log(data)
    return data
  }
}
