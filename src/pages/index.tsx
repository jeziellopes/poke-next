import { PokemonsGrid } from '@/components/context'
import { PokeBallIcon, GithubIcon } from '@/components/icons'
import { Main, Header, Title } from '@/components/structure'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Poke-Next | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <PokeBallIcon size={40} animated />
          <Title>Poke-Next</Title>
          <a
            href="https://github.com/jeziellopes/poke-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={24} />
          </a>
        </Header>
        <PokemonsGrid />
      </Main>
    </div>
  )
}
