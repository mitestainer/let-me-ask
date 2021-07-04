import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .5s, color .5s;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.colors.primary};
  }

  body,
  input,
  button,
  textarea {
    font: 400 16px "Roboto", sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  #root {
    position: relative;
  }
`
