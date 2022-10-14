import { CardStyledProps } from '@/presentation/types'
import {
  fadeAnimations,
  scaleAnimations,
  shadowAnimations,
} from '@/styles/animations'
import styled, { css } from 'styled-components'

export const Container = styled.div<CardStyledProps>`
  ${({ theme, color }) => css`
    background: ${color || theme.colors.main.primary};
    border-radius: 4px;
    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 16px 0;
    position: relative;
    width: 'auto';

    ${scaleAnimations}

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`
