import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.random.objectElement(),
  status: faker.datatype.number({ min: 200, max: 300 })
}
mockedAxios.get.mockResolvedValue(mockedAxiosResult)
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  test('Should return the correct statusCode and body', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    const httpResponse = await sut.get(url)
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
