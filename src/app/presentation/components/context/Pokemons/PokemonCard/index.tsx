import { LikeIcon } from '@/components/icons'
import { HeartIcon } from '@/components/icons/HeartIcon'
import { Card } from '@/components/structure'
import { PokemonCardProps } from '@/presentation/types'
import { capitalize } from '@/presentation/utils'
import { pokemonsColors } from '@/presentation/utils/colors'
import React from 'react'

import * as S from './styles'

export const PokemonCard = ({
  id,
  title,
  types,
  imageUrl,
  likes,
  onLike,
  ...props
}: PokemonCardProps) => {
  return (
    <Card {...props} color={types && pokemonsColors[types[0]].light}>
      <S.ImageWrapper>
        <S.CardHeader>
          <S.HeaderText>{`#${id}`}</S.HeaderText>
          <S.HeaderText bgColor={types && pokemonsColors[types[0]].light}>
            {likes}&nbsp;
            <HeartIcon size={17} />
          </S.HeaderText>
        </S.CardHeader>
        <S.Image src={imageUrl} alt="Card image" />
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Row>
          <S.Title>{capitalize(title)}</S.Title>
          <S.LikeContainer>
            <S.LikeButton onClick={onLike}>
              <LikeIcon
                size={40}
                color={types && pokemonsColors[types[0]].light}
              />
            </S.LikeButton>
          </S.LikeContainer>
        </S.Row>
        <S.Row>
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
        </S.Row>
      </S.InfoWrapper>
    </Card>
  )
}
