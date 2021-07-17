import { HttpGetClient, HttpStatusCode } from '@/data/protocols/http'
import { LoadProductListInterface } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'
import { ProductModel } from '@/domain/models'

export class LoadProductList implements LoadProductListInterface {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<ProductModel[]>
  ) { }

  async loadAll (): Promise<ProductModel[]> {
    const httpResponse = await this.httpGetClient.get(this.url)
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}
