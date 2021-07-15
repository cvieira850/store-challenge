import { LoadProductList } from './load-product-list'
import { HttpGetClientSpy } from '../../test/mock-http-client'

type SutTypes = {
  sut: LoadProductList
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new LoadProductList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('LoadProductList', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
