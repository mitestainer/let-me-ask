import { ReactNode } from 'react'
import { PageAuth, MainContent } from './styles'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'

type HomeProps = {
  children: ReactNode
}

export const HomeComponent: React.FC<HomeProps> = ({ children }) => {
  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo.</strong>
        <p>Tire as dúvidas da sua audiência em tempo real.</p>
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