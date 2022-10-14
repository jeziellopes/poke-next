import { HeartIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('HeartIcon', () => {
  it('renders a heart icon', () => {
    const { getByTestId } = render(<HeartIcon />)

    getByTestId('heart-icon')
  })
})
