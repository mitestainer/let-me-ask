import { ReactNode, FC, MouseEventHandler, ButtonHTMLAttributes } from 'react'
import { Button } from './styles'

type ActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  handler: MouseEventHandler
  icon: ReactNode
  active?: boolean
  counter?: number
  title?: string
}

export const Action: FC<ActionProps> = ({ handler, icon, active = false, counter = 0, title }: ActionProps) => {
  return (
    <Button type="button" onClick={handler} isActive={active} title={title}>
      {counter > 0 && <span>{counter}</span>}
      {icon}
    </Button>
  )
}