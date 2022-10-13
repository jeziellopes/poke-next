import { PokeBallIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('PokeBallIcon', () => {
  it('renders a poke ball icon', () => {
    const { getByTestId } = render(<PokeBallIcon />)

    getByTestId('poke-ball-icon')
  })
})
