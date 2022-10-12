import { PokemonsGrid } from '@/components/context'
import { Main, Header, Title } from '@/components/structure'
import styles from '@/pages/index.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke-Next | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <Title>Poke-Next</Title>
        </Header>
        <PokemonsGrid />
      </Main>
    </div>
  )
}
