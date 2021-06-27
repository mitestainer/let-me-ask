import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Question } from '../../components/Question'
import { useAuth } from '../../hooks/useAuth'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
import { FiThumbsUp } from 'react-icons/fi'
import { FormFooter, UserInfo, QuestionsList } from '../../components/RoomComponent/styles'
import { RoomComponent } from '../../components/RoomComponent'
import { Action } from '../../components/Action'
import { Link } from 'react-router-dom'

type RoomParams = {
  id: string
}

export const Room: React.FC = () => {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  const roomId = params.id

  const { questions } = useRoom(roomId)

  const handleSendQuestion = async (e: FormEvent) => {
    e.preventDefault()
    if (newQuestion.trim() === '') return
    if (!user) throw new Error('You must be logged in')
    // react hot toast
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }
    await database.ref(`rooms/${roomId}/questions`).push(question)
    setNewQuestion('')
  }

  const handleLikeQuestion = async (questionId: string, likeId: string | undefined) => {
    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id
      })
    }
  }

  return (
    <RoomComponent>
      <form onSubmit={handleSendQuestion}>
        <textarea placeholder="O que você quer perguntar?" onChange={e => setNewQuestion(e.target.value)} value={newQuestion} />
        <FormFooter>
          {user ? (<UserInfo>
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
          </UserInfo>) : (<span>Para enviar uma pergunta, <Link to="/">faça seu login</Link>.</span>)}
          <Button type="submit" disabled={!user}>Enviar pergunta</Button>
        </FormFooter>
      </form>
      <QuestionsList>
        {questions.map(question => (
          <Question key={question.id} content={question.content} author={question.author} isAnswered={question.isAnswered} isHighlighted={question.isHighlighted}>
            {!question.isAnswered && (
              <>
                <Action
                  handler={() => handleLikeQuestion(question.id, question.likeId)}
                  icon={<FiThumbsUp />}
                  active={!!question.likeId}
                  counter={question.likeCount}
                  title="Dar like"
                />
              </>
            )}
          </Question>
        ))}
      </QuestionsList>
    </RoomComponent>
  )
}