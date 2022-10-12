import Home from '@/pages/index'
import { theme } from '@/styles/theme'
import { render } from '@testing-library/react'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'

it('renders homepage unchanged', () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
  expect(container).toMatchSnapshot()
})
