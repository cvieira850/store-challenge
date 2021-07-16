import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-response'

export class HttpGetClientSpy<T> implements HttpGetClient<T> {
  url?: string
  response: HttpResponse<T> ={
    statusCode: HttpStatusCode.ok
  }

  async get (url: string): Promise<HttpResponse<T>> {
    this.url = url
    return Promise.resolve(this.response)
  }
}
