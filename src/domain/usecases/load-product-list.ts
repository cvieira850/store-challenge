import { ProductModel } from '../models/product-model'

export interface LoadProductList {
  loadAll(): Promise<ProductModel[]>
}
