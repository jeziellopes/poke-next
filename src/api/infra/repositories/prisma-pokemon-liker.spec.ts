import { Pokemon } from '@/api/domain/entities'
import { PokemonLikerPrismaDataSource } from '@/api/infra/datasources'
import { ctx } from '@/api/infra/helpers'
import { PokemonLikerPrismaRepository } from '@/api/infra/repositories'

describe('Repositories', () => {
  test('Should return liked pokemon on success', () => {
    const params = { id: 1, name: 'bulbasaur' }
    const dataSource = new PokemonLikerPrismaDataSource(ctx.prisma)
    const repo = new PokemonLikerPrismaRepository(dataSource)
    const sut = repo.likePokemon(params)
    expect(sut).toBeInstanceOf(Promise<Pokemon>)
  })
})
