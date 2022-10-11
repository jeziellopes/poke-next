import { PokemonsLoaderService } from '@/api/data/services'
import { ctx, mockCtx } from '@/api/infra/helpers'
import { makePokemonsLoaderService } from '@/api/main/factories/pokemons-loader'
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

describe('Data', () => {
  test('Pokemons loader service instance', () => {
    const sut = makePokemonsLoaderService(ctx.prisma)
    expect(sut).toBeInstanceOf(PokemonsLoaderService)
  })

  test('Should return PokemonsLoaderService response', async () => {
    const sut = makePokemonsLoaderService(ctx.prisma)
    expect(sut.load()).resolves.toEqual(mockedPokemonsResult)
  })
})
