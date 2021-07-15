import { ProductModel } from '../models/product-model'

export interface LoadProducts {
  load(): Promise<ProductModel[]>
}
