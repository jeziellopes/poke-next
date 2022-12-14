import { PokemonCard } from '@/presentation/components/context'
import { ThemeProvider } from '@/presentation/providers'
import { render } from '@testing-library/react'
import React from 'react'

describe('Card', () => {
  it('renders a card with title and image alt', () => {
    const { getByRole, getByAltText } = render(
      <ThemeProvider>
        <PokemonCard
          title="Card Title"
          imageUrl="https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png"
        />
      </ThemeProvider>
    )

    getByRole('heading', {
      name: /Card Title/i,
    })

    getByAltText('Card image')
  })
})
