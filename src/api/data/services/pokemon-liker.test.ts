import { PokemonLikerService } from '@/api/data/services'
import { PokemonLikerPrismaDataSource } from '@/api/infra/datasources'
import { ctx, mockCtx } from '@/api/infra/helpers'
import { PokemonLikerPrismaRepository } from '@/api/infra/repositories'
import { mockPokemon, mockParams } from '@/api/infra/test'

export const mockedPokemonResult = mockPokemon()

beforeEach(() => {
  mockCtx.prisma.pokemon.upsert.mockResolvedValue(mockedPokemonResult)
})

const makeSut = () => {
  const dataSource = new PokemonLikerPrismaDataSource(ctx.prisma)
  const repo = new PokemonLikerPrismaRepository(dataSource)
  return new PokemonLikerService(repo)
}

describe('Data', () => {
  test('Pokemons loader service instance', () => {
    const sut = makeSut()
    expect(sut).toBeInstanceOf(PokemonLikerService)
  })

  test('Should return PokemonsLoaderService response', async () => {
    const sut = makeSut()
    const params = mockParams()
    expect(sut.like(params)).resolves.toEqual(mockedPokemonResult)
  })
})
