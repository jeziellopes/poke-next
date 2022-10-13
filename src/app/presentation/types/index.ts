import { DefaultTheme } from 'styled-components'

export type Pokemon = {
  id: string
  name: string
  url: string
}

export type Props = {
  children?: React.ReactNode
}

export type IconProps = {
  size?: number
}

export type CardProps = {
  children?: React.ReactNode
  height?: number
  width?: number
}

export type PokemonCardProps = {
  title: string
  description?: string
  imageUrl: string
  height?: number
  width?: number
  url?: string
  onClick?: () => void
}

export type StyledProps = {
  theme: DefaultTheme
}

export type CardStyledProps = {
  height?: number
} & StyledProps
