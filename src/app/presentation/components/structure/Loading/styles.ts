import { spinAnimations } from '@/styles/animations'
import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  justify-content: center;
  width: 100%;

  svg {
    ${spinAnimations}
  }
`
