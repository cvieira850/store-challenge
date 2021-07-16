import { ProductModel } from '@/domain/models/product-model'

export interface LoadProductListInterface {
  loadAll(): Promise<ProductModel[]>
}
