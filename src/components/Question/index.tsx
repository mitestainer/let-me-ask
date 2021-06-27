import { ReactNode } from 'react'

import { QuestionComponent, UserInfo } from './styles'

type QuestionProps = {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export const Question = ({ content, author, isAnswered = false, isHighlighted = false, children }: QuestionProps) => {
  return (
    <QuestionComponent isAnswered={isAnswered} isHighLighted={isHighlighted}>
      <p>{content}</p>
      <footer>
        <UserInfo isHighLighted={isHighlighted}>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </QuestionComponent>
  )
}