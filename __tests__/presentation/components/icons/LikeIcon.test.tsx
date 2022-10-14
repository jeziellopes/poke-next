import { LikeIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('LikeIcon', () => {
  it('renders a like icon', () => {
    const { getByTestId } = render(<LikeIcon />)

    getByTestId('like-icon')
  })
})
