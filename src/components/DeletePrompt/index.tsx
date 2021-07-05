import { Overlay, Prompt, TextWrapper, ButtonsWrapper } from './styles'
import { Button } from '../Button'
import { FiXCircle } from 'react-icons/fi'

type PromptProps = {
  handler: () => void
  exit: () => void
}

export const DeletePrompt: React.FC<PromptProps> = ({ handler, exit }: PromptProps) => {
  return (
    <Overlay>
      <Prompt>
        <FiXCircle size={48} color="#E73F5D" />
        <TextWrapper>
          <strong>Encerrar sala</strong>
          <p>Tem certeza que você deseja encerrar esta sala?</p>
        </TextWrapper>
        <ButtonsWrapper>
          <Button onClick={exit}>
            Cancelar
          </Button>
          <Button onClick={handler}>
            Sim, encerrar
          </Button>
        </ButtonsWrapper>
      </Prompt>
    </Overlay>
  )
}