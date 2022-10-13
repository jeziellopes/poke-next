import { CardProps } from '@/presentation/types'
import { capitalize } from '@/presentation/utils'

import * as S from './styles'

export const Card = ({ title, description, imageUrl, ...props }: CardProps) => {
  return (
    <S.Container {...props}>
      <S.Content>
        <S.ImageWrapper>
          <S.Image src={imageUrl} alt="Card image" />
        </S.ImageWrapper>
        <S.Title>{capitalize(title)}</S.Title>
        <S.Description>{`${description?.slice(0, 250)}...`}</S.Description>
      </S.Content>
    </S.Container>
  )
}
