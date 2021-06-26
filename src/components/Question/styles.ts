import styled from 'styled-components'

type QuestionProps = {
  isAnswered: boolean
  isHighLighted: boolean
}

type UserInfoProps = {
  isHighLighted: boolean
}

const setBackgroundColor = (isAnswered: boolean, isHighLighted: boolean) => {
  if (isAnswered) return '#dbdcdd'
  if (isHighLighted) return '#f4f0ff'
  return '#fefefe'
}

export const QuestionComponent = styled.div<QuestionProps>`
  background-color: ${({ isAnswered, isHighLighted }) => setBackgroundColor(isAnswered, isHighLighted)};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba($color: #000000, $alpha: 0.4);
  padding: 24px;
  border: ${({ isHighLighted }) => isHighLighted ? '1px solid #835afd' : '0'};

  & + .question {
    margin-top: 8px;
  }

  p {
    color: #29292e;
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
    color: ${({ isHighLighted }) => isHighLighted ? '#29292e' : '#737380'};
    font-size: 14px;
  }
`