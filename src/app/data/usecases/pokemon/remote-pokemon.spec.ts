import { HttpStatusCode } from '@/data/protocols/http'
import { HttpGetClientSpy, mockPokemonResponse } from '@/data/test'
import { RemotePokemon } from '@/data/usecases'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonModel } from '@/domain/models'
import { RemotePokemonParams } from '@/domain/usecases'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemon
  httpGetClientSpy: HttpGetClientSpy<PokemonModel[]>
  pokemonLoadParams: RemotePokemonParams
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<PokemonModel[]>()
  const pokemonLoadParams = { offset: '10', limit: '15' }
  const sut = new RemotePokemon(url, httpGetClientSpy)
  return { sut, httpGetClientSpy, pokemonLoadParams }
}

describe('RemotePokemon', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut(url)
    await sut.load(pokemonLoadParams)
    expect(httpGetClientSpy.url).toBe(`${url}?offset=10&limit=15`)
  })

  test('Should throw InternalServerError when HttpGetClient return statusCode 500', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.server_error,
    }
    const promise = sut.load(pokemonLoadParams)
    await expect(promise).rejects.toThrow(new InternalServerError())
  })

  test('Should throw UnexpectedError when HttpGetClient return statusCode 400', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut(url)
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    }
    const promise = sut.load(pokemonLoadParams)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return PokemonModel when HttpGetClient gets statusCode 200', async () => {
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut()
    const httpResponse = mockPokemonResponse()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponse,
    }
    const response = await sut.load(pokemonLoadParams)
    expect(response).toEqual(httpResponse)
  })
})
