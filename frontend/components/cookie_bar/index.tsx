import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CookiebarModal from './cookiebar_modal'

import { Container, Wrapper } from './styles'

const CookieBar: React.FC = () => {
  const understood = useSelector((state: any) => state?.cookie?.understood)
  const [openModal, setOpenModal] = useState(false)

  if (!understood)
    return (
      <Container>
        <Wrapper>
          <p>
            Utilizamos cookies para proporcionar aos nossos usuários a melhor experiência no nosso
            site. Você pode entender melhor sobre a utilização de cookies pelo Direção Concursos e
            como desativá-los em
            <Link href="/privacidade">
              <a> saiba mais</a>
            </Link>
            .
          </p>
          <button onClick={() => setOpenModal(true)}>Eu concordo</button>
        </Wrapper>
        {openModal && <CookiebarModal openModal={() => setOpenModal(!openModal)} />}
      </Container>
    )

  return <div />
}

export default CookieBar
