import { useState, useCallback } from 'react'

import Image from 'next/image'

import Menu from '../menu'

import Logo from '../../public/assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { Container, Wrapper } from './styles'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  const close = useCallback(() => {
    setOpenMenu(false)
  }, [])

  return (
    <Container>
      <Wrapper>
        <button>
          <AiOutlineMenu size={27} onClick={() => setOpenMenu(true)} />
        </button>
        <Image src={Logo} alt="Logo" />
      </Wrapper>
      <Menu close={close} openMenu={openMenu} />
    </Container>
  )
}

export default Header
