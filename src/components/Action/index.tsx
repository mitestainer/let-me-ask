import { ReactNode, FC, MouseEventHandler } from 'react'
import { Button } from './styles'

type ActionProps = {
  handler: MouseEventHandler
  icon: ReactNode
  active?: boolean
  counter?: number
  title?: string
}

export const Action: FC<ActionProps> = ({ handler, icon, active = false, counter = 0, title }) => {
  return (
    <Button type="button" onClick={handler} isActive={active} title={title}>
      {counter > 0 && <span>{counter}</span>}
      {icon}
    </Button>
  )
}