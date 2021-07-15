import { ProductModel } from '@/domain/models/product-model'

export interface LoadProductList {
  loadAll(): Promise<ProductModel[]>
}
