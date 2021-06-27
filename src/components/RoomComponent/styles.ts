import styled from 'styled-components'

export const PageRoom = styled.div`
 header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
      padding: 0 24px;
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background-color: #fefefe;
        box-sizing: 0 2px 12px rgba(0, 0, 0, 0.4);
        resize: vertical;
        min-width: 130px;

        @media screen and (max-width: 768px) {
          min-height: 120px;
        }
      }
    }
  }
`

type ContentProps = {
  isMenuOpen: boolean
}

export const Content = styled.div<ContentProps>`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a img {
    max-height: 45px;
  }

  &:before {
    display: none;

    @media screen and (max-width: 768px) {
      display: initial;
      position: fixed;
      content: '';
      top: 98px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0 ,0 ,0 ,.25);
      opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
      transition: opacity .5s;
    }
  }
`

type MenuProps = {
  isOpen: boolean
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  column-gap: 16px;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 98px;
    bottom: 0;
    right: 0;
    background-color: #fff;
    flex-direction: column;
    align-items: flex-end;
    padding: 24px;
    z-index: 10;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .5s;
  }

  button {
    height: 40px;

    @media screen and (max-width: 768px) {
      & + button {
        margin-top: 10px;
      }
    }
  }
`

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  span {
    margin-left: 16px;
    background-color: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  > span {
    font-size: 14px;
    color: #737380;
    font-weight: 500;

    a {
      color: #835afd;
      font-size: 14px;
      font-weight: 500;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`

export const QuestionsList = styled.div`
  margin-top: 32px;
`