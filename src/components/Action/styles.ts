import styled from "styled-components"

type ButtonProps = {
  isActive: boolean
}

export const Button = styled.button<ButtonProps>`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: filter 0.2s;
  display: flex;
  align-items: flex-end;
  color: #737380;
  column-gap: 8px;

  &:hover {
    filter: brightness(0.7);
  }
  
  > svg {
    height: 24px;
    width: 24px;
    color: ${({ isActive }) => isActive ? '#835AFD' : '#737380'};
  }

  &.like-button {
    

    &.liked {
      color: #835afd;

      svg path {
        stroke: #835afd;
      }
    }
  }
`