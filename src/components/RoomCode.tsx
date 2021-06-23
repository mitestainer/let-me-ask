import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string
}

export const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeoClipboard = () => {
    navigator.clipboard.writeText(props.code)
    // react hot toast
  }

  return (
    <button className="room-code" onClick={copyRoomCodeoClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala {props.code}</span>
    </button>
  )
}