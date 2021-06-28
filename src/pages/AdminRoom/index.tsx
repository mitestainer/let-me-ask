import { useParams } from 'react-router-dom'

import { Question } from '../../components/Question'
import { useRoom } from '../../hooks/useRoom'

import { QuestionsList } from '../../components/RoomComponent/styles'
import { database } from '../../services/firebase'
import { RoomComponent } from '../../components/RoomComponent'
import { Action } from '../../components/Action'
import { FiCheckCircle, FiMessageSquare, FiTrash } from 'react-icons/fi'
import { DeletePrompt } from '../../components/DeletePrompt'
import { useState } from 'react'

type RoomParams = {
  id: string
}

export const AdminRoom = () => {
  const params = useParams<RoomParams>()
  const roomId = params.id

  const { questions } = useRoom(roomId)

  const [showPrompt, setShowPrompt] = useState(false)

  const handleCheckQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  const handleHighlightQuestion = async (questionId: string, isHighlighted: boolean) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !isHighlighted
    })
  }

  const handleDeleteQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    setShowPrompt(false)
  }

  return (
    <RoomComponent admin>
      <QuestionsList>
        {questions.map(question => (
          <Question key={question.id} content={question.content} author={question.author} isAnswered={question.isAnswered} isHighlighted={question.isHighlighted}>
            {!question.isAnswered && (
              <>
                <Action
                  handler={() => handleCheckQuestion(question.id)}
                  icon={<FiCheckCircle />}
                  title="Marcar pergunta como respondida"
                />
                <Action
                  handler={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                  icon={<FiMessageSquare />}
                  title="Destacar pergunta"
                />
              </>
            )}
            <Action
              handler={() => setShowPrompt(true)}
              icon={<FiTrash />}
              title="Remover pergunta"
            />
            {showPrompt && <DeletePrompt handler={() => handleDeleteQuestion(question.id)} exit={() => setShowPrompt(false)} />}
          </Question>
        ))}
      </QuestionsList>
    </RoomComponent>
  )
}