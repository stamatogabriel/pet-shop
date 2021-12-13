import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { BsX } from 'react-icons/bs'
import { FiX, FiCamera, FiLogOut, FiUser, FiGrid } from 'react-icons/fi'

import { Container, ModalHeader, Wrapper, Modal, Avatar } from './styles'
import { RootState } from '../../store/modules/rootReducer'

import UserAvatar from '../../public/assets/avatar.png'

interface IModalLessonProps {
  close(): void
  openMenu: boolean
}

const Menu: React.FC<IModalLessonProps> = ({ close, openMenu }) => {
  const user = useSelector((state: RootState) => state.user.profile)

  window.onclick = function (event: any) {
    if (event.target.id === 'background') close()
  }

  return (
    <>
      <Modal open={openMenu} id="background" />
      <Container open={openMenu}>
        <ModalHeader>
          <button onClick={close}>
            <BsX size={27} />
          </button>
        </ModalHeader>
        <hr />
        <Wrapper>
          <Avatar>
            <FiCamera size={50} />
            <Image src={user?.avatar || UserAvatar} />
          </Avatar>
          <h3>{user?.name}</h3>
          <Link href="/profile">
            <a>Editar Cadastro</a>
          </Link>
        </Wrapper>
      </Container>
    </>
  )
}

export default Menu
