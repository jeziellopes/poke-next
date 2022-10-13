import {
  fadeAnimations,
  scaleAnimations,
  shadowAnimations,
} from '@/styles/animations'
import styled, { css, DefaultTheme } from 'styled-components'

export type Props = {
  theme: DefaultTheme
  height?: number
  width?: number
  size?: number
}

export const Container = styled.div<Props>`
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

export const Content = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const Title = styled.h5<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 12px;
    font-weight: 600;
    font-weight: 500;
    line-height: 32px;
  `}
`

export const Description = styled.span<Props>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 10px;
  `}
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  height: auto;
  width: 150px;
`
