import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxiosResponse = () => ({
  status: faker.random.numeric(),
  data: [
    {
      name: faker.random.word(),
      url: faker.internet.url(),
    },
  ],
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue(mockAxiosResponse())

  return mockedAxios
}
