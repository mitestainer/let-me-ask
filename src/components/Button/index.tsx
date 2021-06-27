import { ButtonHTMLAttributes } from 'react'

import { Button as CustomButton } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export const Button: React.FC<ButtonProps> = ({ isOutlined = false, ...rest }: ButtonProps) => {
  return (
    <CustomButton isOutlined={isOutlined} {...rest} />
  )
}