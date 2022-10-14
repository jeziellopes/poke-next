import { DefaultTheme } from 'styled-components'

export type Pokemon = {
  id: string
  name: string
  url: string
}

export type Props = {
  children?: React.ReactNode
}

export type ButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: () => void
}

export type IconProps = {
  size?: number
  color?: string
  reload?: boolean
  animated?: boolean
}

export type CardProps = {
  children?: React.ReactNode
  height?: number
  width?: number
  color?: string
}

export type PokemonCardProps = {
  id: string
  title: string
  types?: string[]
  imageUrl: string
  height?: number
  width?: number
  url?: string
  colors?: {
    light: string
    medium: string
  }
  likes?: number
  onClick?: () => void
}

export type StyledProps = {
  theme: DefaultTheme
  color?: string
  bgColor?: string
}

export type CardStyledProps = {
  height?: number
} & StyledProps

export type PokemonTypeColors = {
  [key: string]: {
    light: string
    medium: string
  }
}
