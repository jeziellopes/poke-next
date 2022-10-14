import { Card } from '@/components/structure'
import { PokemonCardProps } from '@/presentation/types'
import { capitalize } from '@/presentation/utils'
import { pokemonsColors } from '@/presentation/utils/colors'
import React from 'react'

import * as S from './styles'

export const PokemonCard = ({
  title,
  types,
  imageUrl,
  ...props
}: PokemonCardProps) => {
  return (
    <Card {...props} color={types && pokemonsColors[types[0]].light}>
      <S.ImageWrapper>
        <S.Image src={imageUrl} alt="Card image" />
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{capitalize(title)}</S.Title>
        <S.DescriptionContainer>
          {(types || []).slice(0, 2).map((type, key) => (
            <S.Description
              key={key}
              color={types && pokemonsColors[type].medium}
            >
              {type}
            </S.Description>
          ))}
        </S.DescriptionContainer>
      </S.InfoWrapper>
    </Card>
  )
}

export default PokemonCard
