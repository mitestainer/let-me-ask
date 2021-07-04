import styled from 'styled-components'

type QuestionProps = {
  isAnswered: boolean
  isHighLighted: boolean
}

type UserInfoProps = {
  isHighLighted: boolean
}

export const QuestionComponent = styled.div<QuestionProps>`
  background-color: ${({ theme, isAnswered }) => isAnswered ? '#dbdcdd' : theme.question.cardBackgroundColor};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .4);
  padding: 24px;
  border: ${({ isHighLighted }) => isHighLighted ? '1px solid #835afd' : '0'};

  & + & {
    margin-top: 8px;
  }

  p {
    color: ${({ isAnswered }) => isAnswered ? '#29292e' : 'inherit'};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    > div {
      display: flex;
      column-gap: 16px;
    }
  }
`

export const UserInfo = styled.div<UserInfoProps>`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #737380;
    font-size: 14px;
  }
`