import { HttpResponse } from '.'

export interface HttpGetClient<T> {
  get(url: string): Promise<HttpResponse<T>>
}
