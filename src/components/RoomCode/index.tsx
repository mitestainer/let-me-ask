import { Button } from './styles'
import { FiCopy } from 'react-icons/fi'

type RoomCodeProps = {
  code: string
}

export const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeoClipboard = () => {
    navigator.clipboard.writeText(props.code)
    // react hot toast
  }

  return (
    <Button onClick={copyRoomCodeoClipboard} title="Copiar para a área de transferência">
      <div>
        <FiCopy color="#fff" size={20} />
      </div>
      <span>Sala {props.code}</span>
    </Button>
  )
}