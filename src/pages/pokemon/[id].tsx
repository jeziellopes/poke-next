import { PokemonDetails } from '@/components/context/Pokemons/PokemonDetails'
import { PokeBallIcon, GithubIcon } from '@/components/icons'
import { Main, Header, Title, Loading } from '@/components/structure'
import { usePokemonsContext } from '@/presentation/contexts'
import { getPokemonImgUrl } from '@/presentation/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function PokemonDetailsPage() {
  const router = useRouter()
  const { id } = router.query
  const {
    getPokemonById,
    getPokemonLikes,
    handleLikePokemon,
    fetchPokemonDetails,
  } = usePokemonsContext()

  useEffect(() => fetchPokemonDetails(String(id)))

  const pokemon = getPokemonById(id)

  return (
    <>
      <Head>
        <title>Poke-Next | Pokemon Details</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Header onClick={() => router.push('/')}>
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
        {pokemon ? (
          <PokemonDetails
            pokemon={pokemon}
            id={pokemon.id}
            title={pokemon.name}
            types={pokemon.types || []}
            imageUrl={getPokemonImgUrl(pokemon.url)}
            height={280}
            likes={getPokemonLikes(pokemon)}
            onLike={() => handleLikePokemon(pokemon.id)}
          />
        ) : (
          <Loading />
        )}
      </Main>
    </>
  )
}
