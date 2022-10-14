import { Panel } from '@/components/structure'
import { ThemeProvider } from '@/presentation/providers'
import { render } from '@testing-library/react'

describe('Panel', () => {
  it('renders a Panel component', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Panel />
      </ThemeProvider>
    )

    getByTestId('panel-component')
  })
})
