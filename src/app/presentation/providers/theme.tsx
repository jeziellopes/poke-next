import { theme } from '@/presentation/styles/theme'
import React from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
}
