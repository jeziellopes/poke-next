import styles from '@/pages/index.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Poke-Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>HOME</h1>
      </main>
    </div>
  )
}
