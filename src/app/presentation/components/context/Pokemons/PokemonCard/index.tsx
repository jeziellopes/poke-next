import { Card } from '@/components/structure'
import { PokemonCardProps } from '@/presentation/types'
import { capitalize } from '@/presentation/utils'
import React from 'react'

import * as S from './styles'

export const PokemonCard = ({
  title,
  description,
  imageUrl,
  ...props
}: PokemonCardProps) => {
  return (
    <Card {...props}>
      <S.ImageWrapper>
        <S.Image src={imageUrl} alt="Card image" />
      </S.ImageWrapper>
      <S.Title>{capitalize(title)}</S.Title>
      <S.Description>{`${description?.slice(0, 250)}...`}</S.Description>
    </Card>
  )
}

export default PokemonCard
