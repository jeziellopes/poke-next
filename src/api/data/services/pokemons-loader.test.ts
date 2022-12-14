import { PokemonsLoaderService } from '@/api/data/services'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'
import { ctx, mockCtx } from '@/api/infra/helpers'
import { PokemonsLoaderPrismaRepository } from '@/api/infra/repositories'
import { mockPokemon } from '@/api/infra/test'

export const mockedPokemonsResult = [mockPokemon()]

beforeEach(() => {
  mockCtx.prisma.pokemon.findMany.mockResolvedValue(mockedPokemonsResult)
})

const makeSut = () => {
  const dataSource = new PokemonsLoaderPrismaDataSource(ctx.prisma)
  const repo = new PokemonsLoaderPrismaRepository(dataSource)
  return new PokemonsLoaderService(repo)
}

describe('Data', () => {
  test('Pokemons loader service instance', () => {
    const sut = makeSut()
    expect(sut).toBeInstanceOf(PokemonsLoaderService)
  })

  test('Should return PokemonsLoaderService response', async () => {
    const sut = makeSut()
    expect(sut.load()).resolves.toEqual(mockedPokemonsResult)
  })
})
