import {
  BsX,
  //BsArrowLeftShort,
} from 'react-icons/bs'

import {
  Container,
  ModalHeader,
  Wrapper,
  // BackButton,
  Modal,
} from './styles'

interface IModalLessonProps {
  close(): void
  openMenu: boolean
}

const Menu: React.FC<IModalLessonProps> = ({ close, openMenu }) => {
  window.onclick = function (event: any) {
    if (event.target.id === 'background') close()
  }

  return (
    <>
      <Modal open={openMenu} id="background" />
      <Container open={openMenu}>
        <ModalHeader>
          {/* <img src={LogoDirecao} alt="Direção Concursos" /> */}
          <button onClick={close}>
            <BsX size={27} />
          </button>
        </ModalHeader>
        <hr />
        <Wrapper>
          {/* <BackButton onClick={close}>
            <BsArrowLeftShort size={25} /> Voltar
          </BackButton> */}
        </Wrapper>
      </Container>
    </>
  )
}

export default Menu
