import { HttpGetClient, HttpResponse } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpClient implements HttpGetClient<any> {
  async get (url: string): Promise<HttpResponse<any>> {
    const httpResponse = await axios.get(url)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
