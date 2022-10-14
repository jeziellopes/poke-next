import { HttpStatusCode } from '@/data/protocols/http'
import {
  HttpGetClientSpy,
  mockPokemonLikesResponse,
  mockUrl,
} from '@/data/test'
import { RemotePokemonLikes } from '@/data/usecases'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonLikesModel } from '@/domain/models'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemonLikes
  httpGetClientSpy: HttpGetClientSpy<PokemonLikesModel[]>
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<PokemonLikesModel[]>()
  const sut = new RemotePokemonLikes(url, httpGetClientSpy)
  return { sut, httpGetClientSpy }
}

describe('RemotePokemonLikes', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(`${url}`)
  })

  test('Should throw InternalServerError when HttpGetClient return statusCode 500', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.server_error,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  test('Should throw UnexpectedError when HttpGetClient return statusCode 400', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return PokemonLikesModel array when HttpGetClient gets statusCode 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const httpResponse = mockPokemonLikesResponse()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponse,
    }
    const response = await sut.load()
    expect(response).toEqual(httpResponse)
  })
})
