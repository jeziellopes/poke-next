import { describe, expect, test } from '@jest/globals'

import { pokemonsColors } from './colors'

describe('Utils Colors', () => {
  test('Should show correct color', async () => {
    const type = 'fire'
    const sut = pokemonsColors[type]

    expect(sut).toEqual({
      light: '#F4934D',
      medium: '#F08030',
    })
  })
})
