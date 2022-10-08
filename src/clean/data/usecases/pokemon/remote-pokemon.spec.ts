import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { describe, expect, test } from '@jest/globals'

import { RemotePokemon } from './remote-pokemon'

describe('RemotePokemon', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string

      async get(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpClientSpy = new HttpGetClientSpy()
    const sut = new RemotePokemon(url, httpClientSpy)
    await sut.load()

    expect(httpClientSpy.url).toBe(url)
  })
})
