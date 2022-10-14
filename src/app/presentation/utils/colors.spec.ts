import { describe, expect, test } from '@jest/globals'

import {
  getPokemonLightColor,
  getPokemonMediumColor,
  pokemonsColors,
} from './colors'

describe('Utils Colors', () => {
  test('Should show correct color', async () => {
    const type = 'fire'
    const sut = pokemonsColors[type]

    expect(sut).toEqual({
      light: '#F4934D',
      medium: '#F08030',
    })
  })

  test('Should show correct light color', async () => {
    const type = 'fire'
    const sut = getPokemonLightColor([type])
    expect(sut).toEqual('#F4934D')
  })

  test('Should show correct medium color', async () => {
    const type = 'fire'
    const sut = getPokemonMediumColor([type])
    expect(sut).toEqual('#F08030')
  })
})
