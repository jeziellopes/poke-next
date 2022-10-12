import { PokemonsProvider } from '@/presentation/contexts'
import { ComposeProviders, ThemeProvider } from '@/presentation/providers'
import GlobalStyles from '@/presentation/styles/global'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComposeProviders with={[ThemeProvider, PokemonsProvider]}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ComposeProviders>
  )
}
