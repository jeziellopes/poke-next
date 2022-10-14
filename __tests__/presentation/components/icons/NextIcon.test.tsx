import { NextIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('NextIcon', () => {
  it('renders a next icon', () => {
    const { getByTestId } = render(<NextIcon />)

    getByTestId('next-icon')
  })
})
