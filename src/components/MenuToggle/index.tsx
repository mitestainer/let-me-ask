import { FC, MouseEventHandler } from 'react'
import { Toggle, Line } from './styles'

type MenuToggleProps = {
  handler: MouseEventHandler
  isActive: boolean
}

export const MenuToggle: FC<MenuToggleProps> = ({ handler, isActive }) => {
  return (
    <Toggle onClick={handler}>
      <Line isActive={isActive}></Line>
      <Line isActive={isActive}></Line>
      <Line isActive={isActive}></Line>
    </Toggle>
  )
}