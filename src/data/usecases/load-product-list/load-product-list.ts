import { HttpGetClient } from '../../protocols/http/http-get-client'

export class LoadProductList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) { }

  async loadAll (): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
