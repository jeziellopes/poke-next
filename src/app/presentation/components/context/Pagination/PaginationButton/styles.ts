import styled from 'styled-components'

export const Container = styled.button`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  font-family: 'Roboto Mono';
  height: 40px;
  justify-content: center;
  margin: 0 4px;
  padding: 2px;
  width: 40px;

  &:hover {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }

  &:active {
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.1);
  }
`
