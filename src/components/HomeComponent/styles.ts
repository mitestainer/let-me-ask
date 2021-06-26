import styled from 'styled-components'

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  aside {
    flex: 7;
    background-color: #835afd;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    @media screen and (max-width: 768px) {
      flex: 0 1;
      flex-direction: row;
      column-gap: 20px;
      padding: 15px;
      align-items: center;
    }

    img {
      max-width: 320px;

      @media screen and (max-width: 768px) {
        max-width: 50px;
        margin-right: 10px;
      }
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 1.1;
      margin-top: 16px;

      @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-top: 0;
      }
    }

    p {
      font-size: 24px;
      line-height: 1.1;
      margin-top: 16px;
      color: #f8f8f8;

      @media screen and (max-width: 768px) {
        font-size: 12px;
        margin-top: 0;
      }
    }
  }

  main {
    flex: 8;
    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
      flex: 1;
      order: -1;
      padding: 32px 0;
    }
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-size: 24px;
    margin: 64px 0 24px;
    font-family: "Poppins", sans-serif;
  }

  form {
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background-color: #fff;
      border: 1px solid #a8a8b3;
    }

    button {
      margin-top: 16px;
    }

    button,
    input {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;

    a {
      color: #e559f9;
    }
  }
`