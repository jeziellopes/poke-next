import { CardProps, StyledProps } from '@/presentation/types'
import styled, { css } from 'styled-components'

export const Container = styled.div<CardProps>`
  border-radius: 16px;
  display: flex;
  justify-content: center;
  margin-right: 0;
  margin-top: 80px;
  padding: 40px;

  @media only screen and (max-width: 500px) {
    padding: 8px;
    height: auto;
  }
`

export const PanelContainer = styled.div<CardProps>`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0;

  @media only screen and (max-width: 500px) {
    padding: 8px;
  }
`

export const Title = styled.h5<StyledProps>`
  ${({ theme }) => css`
    color: ${theme.colors.main.dark};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin: 0;
  `}
`

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.main.light};
    border-radius: 0 16px 16px 0;
    padding: 24px;
    width: 100%;

    @media only screen and (max-width: 1000px) {
      border-radius: 0 0 16px 16px;
      height: auto;
    }
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
    font-size: 17px;
    font-weight: 600;
    line-height: 15px;
    margin: 0px 8px 0 0;
  `}
`

export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  position: relative;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  position: absolute;
  top: 0px;
  width: 100%;
`

export const Image = styled.img`
  max-height: 300px;
  max-width: 300px;

  @media only screen and (max-width: 500px) {
    margin-top: 40px;
  }
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
    font-size: 15px;
    font-weight: 600;
    margin: 8px 0;
    padding: 4px;
  `}
`

export const PokemonInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  width: 100%;
`

export const PokemonInfoSection = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.main.dark};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 18px;
    font-weight: 700;
    line-height: 15px;
    margin: 24px 8px 16px 0;
  `}
`

export const PokemonInfoField = styled(Row)`
  padding: 8px 0;
  width: 100%;
`

export const PokemonInfoLabel = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.main.dark};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 15px;
    font-weight: 500;
    line-height: 15px;
    margin: 0px 8px 0 0;
  `}
`

export const PokemonInfo = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.main.dark};
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;
    margin: 0px 8px 0 0;
  `}
`

export const GoBack = styled.span<StyledProps>`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.main.dark};
    cursor: pointer;
    display: flex;
    font-family: ${theme.font.primary};
    font-size: 15px;
    font-weight: 600;
    line-height: 15px;
    margin: 0px 8px 0 4px;

    &:hover {
      color: ${color || theme.colors.main.primary};
    }
  `}
`
