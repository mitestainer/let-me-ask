import { Button } from '../../components/Button'

import { Link, useHistory } from 'react-router-dom'
import { FormEvent } from 'react'
import { useState } from 'react'
import { database } from '../../services/firebase'
import { useAuth } from '../../hooks/useAuth'
import { HomeComponent } from '../../components/HomeComponent'

export const NewRoom: React.FC = () => {
  const history = useHistory()
  const { user } = useAuth()
  const [newRoom, setNewRoom] = useState('')

  const handleCreateRoom = async (e: FormEvent) => {
    e.preventDefault()
    if (newRoom.trim() === '') return
    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })
    history.push(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <HomeComponent>
      <h2>Criar uma nova sala</h2>
      <form onSubmit={handleCreateRoom}>
        <input type="text" placeholder="Nome da sala" onChange={e => setNewRoom(e.target.value)} value={newRoom} />
        <Button type="submit">Criar sala</Button>
      </form>
      <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
    </HomeComponent>
  )
}