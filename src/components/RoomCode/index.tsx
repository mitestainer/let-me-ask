import { Button } from './styles'
import { FiCopy } from 'react-icons/fi'
import toast from 'react-hot-toast'

type RoomCodeProps = {
  code: string
}

export const RoomCode: React.FC<RoomCodeProps> = (props: RoomCodeProps) => {
  const copyRoomCodeoClipboard = () => {
    navigator.clipboard.writeText(props.code)
    toast.success('Copiado!', {
      duration: 1000
    });
  }

  return (
    <>
      <Button onClick={copyRoomCodeoClipboard} title="Copiar para a área de transferência">
        <div>
          <FiCopy color="#fff" size={20} />
        </div>
        <span>Sala {props.code}</span>
      </Button>
    </>
  )
}