import { HttpStatusCode } from '@/data/protocols/http'
import {
  HttpGetClientSpy,
  mockPokemonLikerResponse,
  mockUrl,
} from '@/data/test'
import { RemotePokemonLiker } from '@/data/usecases'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonLikesModel } from '@/domain/models'
import { PokemonLikesParams } from '@/domain/usecases'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemonLiker
  httpGetClientSpy: HttpGetClientSpy<PokemonLikesModel>
  pokemonLikeParams: PokemonLikesParams
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<PokemonLikesModel>()
  const pokemonLikeParams = { id: '1' }
  const sut = new RemotePokemonLiker(url, httpGetClientSpy)
  return { sut, httpGetClientSpy, pokemonLikeParams }
}

describe('RemotePokemonLikes', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy, pokemonLikeParams } = makeSut(url)
    await sut.like(pokemonLikeParams)
    expect(httpGetClientSpy.url).toBe(`${url}/1`)
  })

  test('Should throw InternalServerError when HttpGetClient return statusCode 500', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy, pokemonLikeParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.server_error,
    }
    const promise = sut.like(pokemonLikeParams)
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  test('Should throw UnexpectedError when HttpGetClient return statusCode 400', async () => {
    const url = mockUrl()
    const { sut, httpGetClientSpy, pokemonLikeParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.like(pokemonLikeParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return PokemonLikesModel when HttpGetClient gets statusCode 200', async () => {
    const { sut, httpGetClientSpy, pokemonLikeParams } = makeSut()
    const httpResponse = mockPokemonLikerResponse()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponse,
    }
    const response = await sut.like(pokemonLikeParams)
    expect(response).toEqual(httpResponse)
  })
})
