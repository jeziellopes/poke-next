import styled from 'styled-components'

type Props = {
  size?: number
}

export const IconWrapper = styled.div<Props>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${({ size }) => size}px;
  justify-content: center;

  margin-right: 16px;

  svg {
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }
`
