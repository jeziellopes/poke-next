import { StyledProps } from '@/presentation/types'
import styled, { css } from 'styled-components'

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
`

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
    line-height: 15px;
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

export const LikeContainer = styled.div``

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`

export const LikeButton = styled.button`
  border-radius: 20px;
  cursor: pointer;
  height: 40px;
  padding: 0;
  width: 40px;

  svg {
    transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(1.2);
    }
  }
`

export const HeaderText = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.colors.main.light}20;
    border-radius: 4px;
    color: ${color || theme.colors.main.light};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 12px;
    font-weight: 700;
    margin: 8px 0;
    padding: 4px;
  `}
`
