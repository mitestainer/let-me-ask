import { createGlobalStyle } from 'styled-components'

type GlobalType = {
  isMenuOpen: boolean
}

export const GlobalStyles = createGlobalStyle<GlobalType>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color .5s, color .5s;
  }

  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.colors.primary};
    overflow: ${({ isMenuOpen }) => isMenuOpen ? 'hidden' : 'auto'};
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
    min-height: 100%;
    height: 100%;
  }

  #root {
    position: relative;
  }
`
