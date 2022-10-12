import { Props } from '@/presentation/types'

import { Container } from './styles'

export const Card = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}
