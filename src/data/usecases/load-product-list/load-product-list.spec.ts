import { LoadProductList } from './load-product-list'
import { HttpGetClientSpy } from '../../test/mock-http-client'

describe('LoadProductList', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new LoadProductList(url, httpGetClientSpy)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
