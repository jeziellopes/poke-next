import { HttpStatusCode } from '@/data/protocols/http'
import { HttpGetClientSpy, mockPokemonLikesResponse } from '@/data/test'
import { RemotePokemonLikes } from '@/data/usecases'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonLikesModel } from '@/domain/models'
import { PokemonLikesParams } from '@/domain/usecases'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemonLikes
  httpGetClientSpy: HttpGetClientSpy<PokemonLikesModel[]>
  pokemonLikesParams: PokemonLikesParams
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<PokemonLikesModel[]>()
  const pokemonLikesParams = { id: '1' }
  const sut = new RemotePokemonLikes(url, httpGetClientSpy)
  return { sut, httpGetClientSpy, pokemonLikesParams }
}

describe('RemotePokemonLikes', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLikesParams } = makeSut(url)
    await sut.load(pokemonLikesParams)
    expect(httpGetClientSpy.url).toBe(`${url}/1`)
  })

  test('Should throw InternalServerError when HttpGetClient return statusCode 500', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLikesParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.server_error,
    }
    const promise = sut.load(pokemonLikesParams)
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  test('Should throw UnexpectedError when HttpGetClient return statusCode 400', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLikesParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.load(pokemonLikesParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return PokemonLikesModel when HttpGetClient gets statusCode 200', async () => {
    const { sut, httpGetClientSpy, pokemonLikesParams } = makeSut()
    const httpResponse = mockPokemonLikesResponse()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponse,
    }
    const response = await sut.load(pokemonLikesParams)
    expect(response).toEqual(httpResponse)
  })
})
