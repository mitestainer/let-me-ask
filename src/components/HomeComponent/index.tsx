import { ReactNode } from 'react'
import { PageAuth, MainContent } from './styles'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

type HomeProps = {
  children: ReactNode
}

export const HomeComponent: React.FC<HomeProps> = ({ children }: HomeProps) => {
  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas!</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="Let Me Ask" />
          <>
            {children}
          </>
        </MainContent>
      </main>
    </PageAuth>
  )
}