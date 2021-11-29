import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: #fff;
  width: 100vw;
  z-index: 999999;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  min-height: 50px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.125rem;
  }

  button {
    color: #fff;
    background: #ff6600;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 700;
    margin: 1rem;
  }

  a {
    color: #ff6600;
    font-weight: 700;
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;

    p {
      max-width: 80%;
    }
  }
`

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
  z-index: 900;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  width: 60%;
  max-width: 800px;
  background: #fff;
  border-radius: 4px;
  padding: 2rem;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`

export const ModalContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #ff6600;
    font-size: 1.5rem;
    line-height: 1.75rem;
    font-weight: 700;
  }

  button {
    background: transparent;
    border: none;
  }
`

export const ModalContentText = styled.div`
  p {
    font-size: 0.825rem;
    line-height: 1rem;
    max-width: 800px;
  }

  h3 {
    color: #7a7a7a;
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 700;
  }
`

export const ModalContentFooter = styled.div`
  display: flex;
  justify-content: right;

  button {
    margin: 1rem 0;
    background: #ff6600;
    color: #fff;
    font-weight: 700;
    border-radius: 4px;
    border: none;
    padding: 0.5rem;
    width: 30%;
  }
`

export const ModalContentWrapper = styled.div`
  display: flex;
`
