import { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CreateRoomButton, Separator } from './styles'
import { HomeComponent } from '../../components/HomeComponent'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { FaGoogle } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

export const Home: React.FC = () => {
  const history = useHistory()
  const { user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  const handleCreateRoom = async () => {
    if (!user) await signInWithGoogle()
    history.push('/rooms/new')
  }

  const handleJoinRoom = async (e: FormEvent) => {
    e.preventDefault()
    if (roomCode.trim() === '') return
    const roomRef = await database.ref(`rooms/${roomCode}`).get()
    if (!roomRef.exists()) {
      toast.error(<span>Sala <strong>{roomCode}</strong> não encontrada!</span>, {
        duration: 2000
      })
      setRoomCode('')
      return
    }
    if (roomRef.val().endedAt) {
      toast(<span>Sala já fechada</span>, {
        duration: 2000,
        icon: '🔒'
      })
      return
    }
    history.push(`/rooms/${roomCode}`)
  }

  return (
    <HomeComponent>
      <CreateRoomButton onClick={handleCreateRoom}>
        <FaGoogle size={24} style={{ marginRight: 8 }} />
        Crie sua sala com o Google
      </CreateRoomButton>
      <Separator>ou entre em uma sala</Separator>
      <form onSubmit={handleJoinRoom}>
        <input type="text" placeholder="Digite o código da sala" onChange={e => setRoomCode(e.target.value)} value={roomCode} />
        <Button type="submit">Entrar na sala</Button>
      </form>
      <Toaster />
    </HomeComponent>
  )
}