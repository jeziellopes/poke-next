import Home from '@/pages/index'
import { theme } from '@/styles/theme'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )

    const heading = screen.getByRole('heading', {
      name: /Poke-Next/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
