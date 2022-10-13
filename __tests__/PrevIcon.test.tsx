import { PrevIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('PrevIcon', () => {
  it('renders a prev icon', () => {
    const { getByTestId } = render(<PrevIcon />)

    getByTestId('prev-icon')
  })
})
