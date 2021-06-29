// import { useState, useContext } from 'react'
import { Switcher, Wrapper, Switch } from './styles'
// import {ThemeContext} from 'styled-components'

type ThemeSwitcherProps = {
  toggleTheme: () => void
  currentTheme: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, currentTheme }) => {
  // const [isDarkOn, setIsDarkOn] = useState(false)
  // const {} = useContext(ThemeContext)

  return (
    <Switcher onClick={toggleTheme}>
      <Wrapper>
        <span>🌞</span>
        <span>🌛</span>
        <Switch isDarkOn={currentTheme === 'dark'}></Switch>
        {/* {isDarkOn ? 'dark' : 'light'} */}
      </Wrapper>
    </Switcher>
  )
}