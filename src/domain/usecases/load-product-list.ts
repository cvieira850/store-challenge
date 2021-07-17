import { ProductModel } from '@/domain/models'

export interface LoadProductListInterface {
  loadAll(): Promise<ProductModel[]>
}
