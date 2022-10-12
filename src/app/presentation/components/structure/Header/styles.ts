import styled from 'styled-components'

export const Header = styled.div`
  background: ${({ theme }) => theme.colors.main.primary};
  box-shadow: ${({ theme }) => theme.shadow.navbar};
  height: 80px;
  padding: 0 40px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
`
