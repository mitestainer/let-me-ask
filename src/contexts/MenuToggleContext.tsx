import { useState } from 'react'
import { createContext, ReactNode } from 'react'

type MenuToggleContextType = {
  isMenuOpen: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuToggleContext = createContext({} as MenuToggleContextType)

type MenuToggleContextProviderProps = {
  children: ReactNode
}

export const MenuToggleProvider = (props: MenuToggleContextProviderProps) => {
  const [isMenuOpen, toggle] = useState(false)

  return (
    <MenuToggleContext.Provider value={{ isMenuOpen, toggle }}>
      {props.children}
    </MenuToggleContext.Provider>
  )
}