import { StyledProps } from '@/presentation/types'
import styled, { css } from 'styled-components'

export const Title = styled.h5<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.main.dark};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
    margin: 0;
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.main.light};
    border-radius: 0px 0px 4px 4px;
    height: 30%;
    padding: 8px 16px;
    width: 100%;
  `}
`

export const DescriptionContainer = styled.div`
  display: flex;
`

export const Description = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.main.light};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 15px;
    font-weight: 400;
    margin: 0px 8px 0 0;
  `}
`

export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: center;
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
`
