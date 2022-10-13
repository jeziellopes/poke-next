import { capitalize } from '@/presentation/utils'

import * as S from './styles'

type Props = {
  title: string
  description?: string
  imageUrl: string
  height?: number
  width?: number
  url?: string
  onClick?: () => void
}

export const Card = ({ title, description, imageUrl, ...props }: Props) => {
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
