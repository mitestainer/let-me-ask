import { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { usePersistedState } from './hooks/usePersistedState'

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from './pages/AdminRoom'

import { GlobalStyles } from './styles/GlobalStyles'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import { ThemeSwitcher } from './components/ThemeSwitcher'
import { light } from './styles/themes/light'
import { dark } from './styles/themes/dark'
import { MenuToggleContext } from './contexts/MenuToggleContext'
import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'

function App() {
  const storageName = 'theme'
  const [theme, setTheme] = usePersistedState<DefaultTheme>(storageName, light)
  const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light)

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const storedTheme = localStorage.getItem(storageName)
      if (storedTheme && JSON.parse(storedTheme).title === 'light') {
        setTheme(dark)
      }
    }
  }, [setTheme])

  const { isMenuOpen } = useContext(MenuToggleContext)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles isMenuOpen={isMenuOpen} />
        <BrowserRouter>
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id" component={AdminRoom} />
            </Switch>
          </AuthContextProvider>
          <Toaster toastOptions={{
            style: {
              backgroundColor: theme.toastBackgroundColor,
              color: theme.colors.primary
            },
          }} />
        </BrowserRouter>
        <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={theme.title} />
      </ThemeProvider>
    </>
  );
}

export default App
