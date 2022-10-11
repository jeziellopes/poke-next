import { Pokemon } from '@/api/domain/entities'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources/prisma-pokemons'
import { ctx } from '@/api/infra/helpers'
import { PokemonsLoaderPrismaRepository } from '@/api/infra/repositories'

describe('Repositories', () => {
  test('Should return pokemons on success', () => {
    const dataSource = new PokemonsLoaderPrismaDataSource(ctx.prisma)
    const repo = new PokemonsLoaderPrismaRepository(dataSource)
    const sut = repo.loadPokemons()
    expect(sut).toBeInstanceOf(Promise<Pokemon[]>)
  })
})
