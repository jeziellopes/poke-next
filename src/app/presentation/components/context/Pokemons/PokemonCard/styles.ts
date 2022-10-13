import { StyledProps } from '@/presentation/types'
import styled, { css } from 'styled-components'

export const Title = styled.h5<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.main.light};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 12px;
    font-weight: 600;
    line-height: 32px;
  `}
`

export const Description = styled.span<StyledProps>`
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
