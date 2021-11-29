import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineClose } from 'react-icons/ai'
import {
  ModalContainer,
  ModalContent,
  ModalContentFooter,
  ModalContentText,
  ModalContentTitle,
  ModalContentWrapper,
} from './styles'

import categories from './categories.json'
import Toggle from '../toggle'
import { changeCookies, changeUnderstood } from '../../store/modules/cookieAccept/action'

interface PropsModalCookiebar {
  openModal(): void
}

const CookiebarModal: React.FC<PropsModalCookiebar> = ({ openModal }) => {
  const cookieAccept = useSelector((state: any) => state?.cookie?.acceptedCookies)
  const understood = useSelector((state: any) => state?.cookie?.understood)
  const dispatch = useDispatch()

  const closeModal = useCallback(() => {
    openModal()
  }, [openModal])

  const handleToggle = useCallback(
    (key) => {
      dispatch(changeCookies({ ...cookieAccept, [key]: !cookieAccept[key] }))
    },
    [cookieAccept, dispatch]
  )

  const handleAccept = useCallback(() => {
    dispatch(changeUnderstood(!understood))
    closeModal()
  }, [closeModal, dispatch, understood])

  return (
    <ModalContainer>
      <ModalContent>
        <ModalContentTitle>
          <h1>Categorias</h1>
          <button onClick={openModal}>
            <AiOutlineClose size={20} />
          </button>
        </ModalContentTitle>
        <ModalContentText>
          {categories.map((item, idx) => (
            <ModalContentWrapper key={idx}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <Toggle
                small
                selector={cookieAccept[item.key]}
                handleChange={() => {
                  handleToggle(item.key)
                }}
              />
            </ModalContentWrapper>
          ))}
        </ModalContentText>
        <ModalContentFooter>
          <button onClick={handleAccept}>Entendi</button>
        </ModalContentFooter>
      </ModalContent>
    </ModalContainer>
  )
}

export default CookiebarModal
