import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpectedError-error'
import { ProductModel } from '@/domain/models/product-model'

export class LoadProductList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<ProductModel[]>
  ) { }

  async loadAll (): Promise<void> {
    const httpResponse = await this.httpGetClient.get(this.url)
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: break
      default: throw new UnexpectedError()
    }
  }
}
