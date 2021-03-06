import styled from 'styled-components'

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  background-color: inherit;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;

  div {
    background-color: #853afd;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  span {
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 16px 0 12px;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary}
  }
`