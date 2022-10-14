import { Grid } from '@/components/structure'
import { ThemeProvider } from '@/presentation/providers'
import { render } from '@testing-library/react'

describe('Panel', () => {
  it('renders a Panel component', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Grid />
      </ThemeProvider>
    )

    getByTestId('grid-component')
  })
})
