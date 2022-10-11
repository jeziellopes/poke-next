import { ComposeProviders, ThemeProvider } from '@/presentation/providers'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComposeProviders with={[ThemeProvider]}>
      <Component {...pageProps} />
    </ComposeProviders>
  )
}
