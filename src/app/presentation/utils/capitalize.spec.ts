import { describe, expect, test } from '@jest/globals'

import { capitalize } from './capitalize'

describe('Utils Capitalize', () => {
  test('Should capitalize text ', async () => {
    const text = 'capitalized'
    const sut = capitalize(text)
    expect(sut).toMatch('Capitalized')
  })
})
