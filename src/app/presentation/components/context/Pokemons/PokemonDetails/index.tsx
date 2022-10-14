import { LikeIcon } from '@/components/icons'
import { HeartIcon } from '@/components/icons/HeartIcon'
import { Panel } from '@/components/structure'
import { PokemonPanelProps } from '@/presentation/types'
import { capitalize } from '@/presentation/utils'
import {
  getPokemonLightColor,
  getPokemonMediumColor,
} from '@/presentation/utils/colors'
import { useRouter } from 'next/router'
import React from 'react'

import * as S from './styles'

export const PokemonDetails = ({
  id,
  title,
  types,
  imageUrl,
  likes,
  onLike,
  pokemon,
  ...props
}: PokemonPanelProps) => {
  const router = useRouter()

  return (
    <S.Container {...props} color={getPokemonLightColor(types)}>
      <S.PanelContainer>
        <S.GoBack onClick={() => router.push('/')}>Go back</S.GoBack>
        <Panel color={getPokemonLightColor(types)}>
          <S.ImageWrapper>
            <S.CardHeader>
              <S.HeaderText>{`#${id}`}</S.HeaderText>
              <S.HeaderText bgColor={getPokemonLightColor(types)}>
                {likes}&nbsp;
                <HeartIcon size={20} />
              </S.HeaderText>
            </S.CardHeader>
            <S.Image src={imageUrl} alt="Card image" />
          </S.ImageWrapper>
          <S.InfoWrapper>
            <S.Row>
              <S.Title>{capitalize(title)}</S.Title>
              <S.LikeContainer>
                <S.LikeButton onClick={onLike}>
                  <LikeIcon size={40} color={getPokemonLightColor(types)} />
                </S.LikeButton>
              </S.LikeContainer>
            </S.Row>
            <S.Row>
              <S.DescriptionContainer>
                {(types || []).slice(0, 2).map((type, key) => (
                  <S.Description
                    key={key}
                    color={getPokemonMediumColor([type])}
                  >
                    {type}
                  </S.Description>
                ))}
              </S.DescriptionContainer>
            </S.Row>
            {Boolean(pokemon) && (
              <S.Row>
                <S.PokemonInfoContainer>
                  <S.PokemonInfoField>
                    <S.PokemonInfoLabel>Height:</S.PokemonInfoLabel>
                    <S.PokemonInfo>{pokemon?.height}</S.PokemonInfo>
                  </S.PokemonInfoField>
                  <S.PokemonInfoField>
                    <S.PokemonInfoLabel>Weight:</S.PokemonInfoLabel>
                    <S.PokemonInfo>{pokemon?.weight}</S.PokemonInfo>
                  </S.PokemonInfoField>
                  <S.PokemonInfoField>
                    <S.PokemonInfoLabel>Base Experience:</S.PokemonInfoLabel>
                    <S.PokemonInfo>{pokemon?.base_experience}</S.PokemonInfo>
                  </S.PokemonInfoField>
                  <S.PokemonInfoField>
                    <S.PokemonInfoLabel>Abilities:</S.PokemonInfoLabel>
                    <S.PokemonInfo>
                      {pokemon?.abilities?.join(', ')}
                    </S.PokemonInfo>
                  </S.PokemonInfoField>
                  <S.PokemonInfoSection>Stats</S.PokemonInfoSection>
                  {pokemon?.stats?.map((stat, key) => (
                    <S.PokemonInfoField key={key}>
                      <S.PokemonInfoLabel>
                        {capitalize(stat.name)}:
                      </S.PokemonInfoLabel>
                      <S.PokemonInfo>{stat.base_stat}</S.PokemonInfo>
                    </S.PokemonInfoField>
                  ))}
                </S.PokemonInfoContainer>
              </S.Row>
            )}
          </S.InfoWrapper>
        </Panel>
      </S.PanelContainer>
    </S.Container>
  )
}
