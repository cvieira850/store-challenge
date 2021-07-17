import axios from 'axios'
import faker from 'faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue({
    data: faker.random.objectElement(),
    status: faker.datatype.number({ min: 200, max: 300 })
  })

  return mockedAxios
}
