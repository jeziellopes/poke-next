import { HttpPostClient } from '@/data/protocols/http/httpPostClient'
import { describe, expect, test } from '@jest/globals'

import { RemotePokemon } from './remote-pokemon'

describe('RemotePokemon', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string

      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    const url = 'any_url'
    const httpClientSpy = new HttpPostClientSpy()
    const sut = new RemotePokemon(url, httpClientSpy)
    await sut.load()

    expect(httpClientSpy.url).toBe(url)
  })
})
