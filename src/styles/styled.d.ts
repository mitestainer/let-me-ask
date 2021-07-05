import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string,
      roomBorder: string
    },
    backgroundColor: string
    homeBackgroundColor: string,
    question: {
      cardBackgroundColor: string,
      colorAnswered: string,
      colorHighlighted: string,
      backgroundHighlighted: string
    },
    toastBackgroundColor: string
  }
}