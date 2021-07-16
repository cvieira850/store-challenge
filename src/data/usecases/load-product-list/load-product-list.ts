import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpectedError-error'
import { ProductModel } from '@/domain/models/product-model'
import { LoadProductListInterface } from '@/domain/usecases/load-product-list'

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
