import { LoadProductList } from './load-product-list'
import { HttpGetClient } from '../../protocols/http/http-get-client'

describe('LoadProductList', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string
      async get (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new LoadProductList(url, httpGetClientSpy)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
