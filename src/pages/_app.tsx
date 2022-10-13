import { PokemonsProvider, PaginationProvider } from '@/presentation/contexts'
import { ComposeProviders, ThemeProvider } from '@/presentation/providers'
import GlobalStyles from '@/presentation/styles/global'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComposeProviders
      with={[ThemeProvider, PaginationProvider, PokemonsProvider]}
    >
      <GlobalStyles />
      <Component {...pageProps} />
    </ComposeProviders>
  )
}
