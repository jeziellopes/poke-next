import { getPokemonImgUrl } from '@/presentation/utils'
import { describe, expect, test } from '@jest/globals'

import { getPokemonIdFromUrl } from './pokemon'

describe('Utils Pokemon', () => {
  test('Should get pokemon image URL', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1'
    const sut = getPokemonImgUrl(url)
    expect(sut).toEqual(
      'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png'
    )
  })

  test('Should get ID from a given pokemon URL', async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/1'
    const sut = getPokemonIdFromUrl(url)
    expect(sut).toEqual('001')
  })
})
