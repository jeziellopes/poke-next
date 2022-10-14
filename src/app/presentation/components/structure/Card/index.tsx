import { CardProps } from '@/presentation/types'

import * as S from './styles'

export const Card = ({ children, ...props }: CardProps) => {
  return <S.Container {...props}>{children}</S.Container>
}
