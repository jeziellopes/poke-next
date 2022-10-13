import { StyledProps, CardStyledProps } from '@/presentation/types'
import {
  fadeAnimations,
  scaleAnimations,
  shadowAnimations,
} from '@/styles/animations'
import styled, { css } from 'styled-components'

export const Container = styled.div<CardStyledProps>`
  ${({ theme, height }) => css`
    background: ${theme.colors.main.primary};
    border-radius: 4px;
    box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.11);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: ${height || 'unset'}px;
    justify-content: flex-start;
    margin: 16px 0;
    padding: 8px;
    position: relative;
    width: 'auto';

    ${scaleAnimations}

    ${fadeAnimations}

    ${shadowAnimations}
  `}
`

export const Content = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  padding: 8px;
`
