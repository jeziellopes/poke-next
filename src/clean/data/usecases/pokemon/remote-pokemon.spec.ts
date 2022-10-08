import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemotePokemon } from '@/data/usecases/pokemon/remote-pokemon'
import { describe, expect, test } from '@jest/globals'

describe('RemotePokemon', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'any_url'
    const httpClientSpy = new HttpGetClientSpy()
    const sut = new RemotePokemon(url, httpClientSpy)
    await sut.load()

    expect(httpClientSpy.url).toBe(url)
  })
})
