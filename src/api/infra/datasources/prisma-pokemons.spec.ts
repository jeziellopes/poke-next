import { Pokemon } from '@/api/domain/entities'
import { PokemonsLoaderPrismaDataSource } from '@/api/infra/datasources'
import { ctx } from '@/api/infra/helpers'
import { describe, expect, test } from '@jest/globals'

const makeSut = () => new PokemonsLoaderPrismaDataSource(ctx.prisma)

describe('Datasources', () => {
  test('Prisma load pokemons data source', () => {
    const sut = makeSut()
    expect(sut.findMany()).toBeInstanceOf(Promise<Pokemon[]>)
  })
})
