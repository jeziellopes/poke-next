import { AxiosHttpClient } from '@/infra/http'
import { mockAxios, mockAxiosResponse } from '@/infra/test/mock-axios'
import { describe, expect, test } from '@jest/globals'

jest.mock('axios')

const makeSut = () => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL and Verb', async () => {
    const url = 'any_url'
    const { sut, mockedAxios } = makeSut()
    await sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith('any_url')
  })

  test('Should call axios with correct Response', async () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.get('any_url')
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })

  test('Should call axios with correct Response on failure', async () => {
    const { sut, mockedAxios } = makeSut()
    mockedAxios.get.mockRejectedValueOnce({
      response: mockAxiosResponse(),
    })
    const promise = sut.get('any_url')
    expect(promise).toEqual(mockedAxios.get.mock.results[0].value)
  })
})
