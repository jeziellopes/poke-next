import { CardProps } from '@/presentation/types'

import * as S from './styles'

export const Panel = ({ children, ...props }: CardProps) => {
  return (
    <S.Container data-testid="panel-component" {...props}>
      {children}
    </S.Container>
  )
}
