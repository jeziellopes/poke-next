import { HttpStatusCode } from '@/data/protocols/http'
import {
  HttpGetClientSpy,
  mockPokemonDetailsResponse,
  mockPokemonDetailsResult,
} from '@/data/test'
import { RemotePokemonDetails } from '@/data/usecases'
import { InternalServerError, UnexpectedError } from '@/domain/errors'
import { PokemonDetailsModel } from '@/domain/models'
import { PokemonDetailsParams } from '@/domain/usecases'
import { describe, expect, test } from '@jest/globals'

type SutTypes = {
  sut: RemotePokemonDetails
  httpGetClientSpy: HttpGetClientSpy<PokemonDetailsModel>
  pokemonLoadParams: PokemonDetailsParams
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<PokemonDetailsModel>()
  const pokemonLoadParams = { id: '1', name: 'bulbasaur' }
  const sut = new RemotePokemonDetails(url, httpGetClientSpy)
  return { sut, httpGetClientSpy, pokemonLoadParams }
}

describe('RemotePokemonDetails', () => {
  test('Should call HttpClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut(url)
    await sut.load(pokemonLoadParams)
    expect(httpGetClientSpy.url).toBe(`${url}/1`)
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

  test('Should return PokemonDetailsModel when HttpGetClient gets statusCode 200', async () => {
    const { sut, httpGetClientSpy, pokemonLoadParams } = makeSut()
    const httpResponse = mockPokemonDetailsResponse()
    const httpResult = mockPokemonDetailsResult()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResponse,
    }
    const response = await sut.load(pokemonLoadParams)
    expect(response).toEqual(httpResult)
  })
})
