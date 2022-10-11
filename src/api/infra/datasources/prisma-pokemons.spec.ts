import { Pokemon } from '@/api/domain/entities'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'
import { ctx } from '@/api/infra/helpers'
import { describe, expect, test } from '@jest/globals'

describe('Datasources', () => {
  test('Should return a promise of Pokemons from mocked Datasource', () => {
    const sut = new PokemonsLoaderPrismaDataSource(ctx.prisma)
    expect(sut.findMany()).toBeInstanceOf(Promise<Pokemon[]>)
  })

  test('Should return a promise of Pokemons from Datasource ', () => {
    const sut = new PokemonsLoaderPrismaDataSource()
    expect(sut.findMany()).toBeInstanceOf(Promise<Pokemon[]>)
  })
})
