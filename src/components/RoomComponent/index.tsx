import { ReactNode, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { database } from '../../services/firebase'

import logoImg from '../../assets/images/logo.svg'

import { Button } from '../../components/Button'

import { RoomCode } from '../RoomCode'
import { useRoom } from '../../hooks/useRoom'

import { PageRoom, Content, RoomTitle, Menu } from './styles'
import { MenuToggle } from '../MenuToggle'

type RoomProps = {
  admin?: boolean
  children: ReactNode
}

type RoomParams = {
  id: string
}

export const RoomComponent: React.FC<RoomProps> = ({ children, admin = false }: RoomProps) => {
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomId = params.id
  const { title, questions } = useRoom(roomId)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggle = () => setIsMenuOpen(!isMenuOpen)

  const handleEndRoom = async () => {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })
    history.push('/')
  }

  return (
    <PageRoom>
      <header>
        <Content isMenuOpen={isMenuOpen}>
          <Link to="/">
            <img src={logoImg} alt="Let Me Ask" />
          </Link>
          <Menu isOpen={isMenuOpen}>
            <RoomCode code={roomId} />
            {admin && <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>}
          </Menu>
          <MenuToggle handler={handleToggle} isActive={isMenuOpen} />
        </Content>
      </header>
      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta{questions.length === 1 ? '' : 's'}</span>}
        </RoomTitle>
        <>
          {children}
        </>
      </main>
    </PageRoom>
  )
}