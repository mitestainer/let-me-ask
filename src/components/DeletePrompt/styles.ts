import styled from 'styled-components'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(5, 2, 6, .8);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Prompt = styled.div`
  width: 590px;
  height: 362px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 70px 0;
`

export const TextWrapper = styled.div`
  text-align: center;

  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 12px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 8px;

  > button {
    &:nth-child(1) {
      background-color: #DBDCDD;
      color: #737380;
    }

    &:nth-child(2) {
      background-color: #E73F5D;
    }
  }
`