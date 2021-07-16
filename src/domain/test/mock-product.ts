import { ProductModel } from '../models/product-model'
import faker from 'faker'

export const mockProductModel = (): ProductModel => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  createdAt: faker.datatype.datetime().toString(),
  price: faker.commerce.price(),
  image: faker.image.imageUrl(),
  stock: faker.datatype.number({
    min: 10,
    max: 500
  })
})

export const mockProductsModel = (): ProductModel[] => ([
  mockProductModel(),
  mockProductModel()
])
