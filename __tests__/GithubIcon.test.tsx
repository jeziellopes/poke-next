import { GithubIcon } from '@/components/icons'
import { render } from '@testing-library/react'

describe('GithubIcon', () => {
  it('renders a github icon', () => {
    const { getByTestId } = render(<GithubIcon />)

    getByTestId('github-icon')
  })
})
