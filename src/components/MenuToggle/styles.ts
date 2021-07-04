import styled from 'styled-components'

export const Toggle = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: transparent;
    border: 0;
  }
`

type LineProps = {
  isActive: boolean
}

export const Line = styled.span<LineProps>`
  height: 2px;
  width: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  & + span {
    margin-top: 3px;
  }
`