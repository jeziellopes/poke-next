import { PokemonsLoaderService } from '@/api/data/services'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'
import { ctx, mockCtx } from '@/api/infra/helpers'
import { PokemonsLoaderPrismaRepository } from '@/api/infra/repositories'
import { faker } from '@faker-js/faker'

export const mockedPokemonsResult = [
  {
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    likes: Number(faker.random.numeric()),
    createdAt: faker.datatype.datetime(),
  },
]

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
