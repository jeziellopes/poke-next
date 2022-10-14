import { CardStyledProps } from '@/presentation/types'
import { fadeAnimations, shadowAnimations } from '@/styles/animations'
import styled, { css } from 'styled-components'

export const Container = styled.div<CardStyledProps>`
  ${({ theme, color }) => css`
    background: ${color || theme.colors.main.primary};
    border-radius: 16px;
    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;
    height: 70vh;
    justify-content: center;
    margin: 16px 0;
    max-width: 900px;
    position: relative;

    width: 70vw;

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      justify-content: space-between;
    }

    @media only screen and (max-width: 500px) {
      width: 90vw;
    }

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`
