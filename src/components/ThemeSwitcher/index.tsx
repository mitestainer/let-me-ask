import { Switcher, Wrapper, Switch } from './styles'

type ThemeSwitcherProps = {
  toggleTheme: () => void
  currentTheme: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <Switcher onClick={toggleTheme}>
      <Wrapper>
        <span>🌞</span>
        <span>🌛</span>
        <Switch isDarkOn={currentTheme === 'dark'}></Switch>
      </Wrapper>
    </Switcher>
  )
}