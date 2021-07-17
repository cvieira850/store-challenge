import { HttpGetClient, HttpResponse, HttpStatusCode } from '@/data/protocols/http'

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
