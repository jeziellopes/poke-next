import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemotePokemon } from '@/data/usecases/pokemon/remote-pokemon'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemon
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemotePokemon(url, httpGetClientSpy)
  return { sut, httpGetClientSpy }
}

describe('RemotePokemon', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load()

    expect(httpGetClientSpy.url).toBe(url)
  })
})
