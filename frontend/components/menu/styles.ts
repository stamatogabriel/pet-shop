import styled, { css } from 'styled-components'

interface CheckProps {
  checked?: boolean
  open?: boolean
}

export const Modal = styled.div<CheckProps>`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;

  ${(props) =>
    !props.open &&
    css`
      display: none;
    `};
`

export const Container = styled.div<CheckProps>`
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: #fff;
  max-width: 383px;

  position: fixed;
  top: 0;

  // overflow: auto;

  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  hr {
    border: none;
    border-top: 1px solid #a7a7a7;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`

export const ModalHeader = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: transparent;
    border: none;
  }
`

export const BackButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 auto 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;
  line-height: 1rem;
  font-weight: 700;

  svg {
    margin-right: 0.4rem;
  }
`
