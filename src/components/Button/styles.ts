import styled from 'styled-components'

type ButtonProps = {
  isOutlined: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${({ isOutlined }) => isOutlined ? '#fff' : '#8354fd'};
  color: ${({ isOutlined }) => isOutlined ? '#8354fd' : '#fff'};
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${({ isOutlined }) => isOutlined ? '1px solid #8354fd' : '0'};
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  /* &.outlined {
    background-color: #fff;
    border: 1px solid #8354fd;
    color: #8354fd;
  } */

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`