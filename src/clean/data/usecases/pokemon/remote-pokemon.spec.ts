import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { HttpGetClientSpy } from '@/data/test/mock-http-client'
import { RemotePokemon } from '@/data/usecases/pokemon/remote-pokemon'
import { InternalServerError } from '@/domain/errors/internal-server-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
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

  test('Should throw InternalServerError when HttpGetClient return statusCode 500', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.server_error,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  test('Should throw UnexpectedError when HttpGetClient return statusCode 400', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
