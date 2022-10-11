import { AxiosHttpClient } from '@/infra/http'
import { faker } from '@faker-js/faker'
import { describe, expect, test } from '@jest/globals'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  status: faker.random.numeric(),
  data: [
    {
      name: faker.random.word(),
      url: faker.internet.url(),
    },
  ],
}
mockedAxios.get.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and Verb', async () => {
    const url = 'any_url'
    const sut = makeSut()
    await sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith('any_url')
  })

  test('Should call axios with correct Response', async () => {
    const sut = makeSut()
    const httpResponse = await sut.get('any_url')
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    })
  })
})
