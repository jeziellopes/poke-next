import styled from 'styled-components'

type Props = {
  size?: number
}

export const IconWrapper = styled.div<Props>`
  height: ${({ size }) => size}px;
  margin-right: 16px;
  position: fixed;
  right: 8px;
  top: calc((80px - 24px) / 2);
  width: ${({ size }) => size}px;

  svg {
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      transform: scale(1.2);
    }
  }
`
