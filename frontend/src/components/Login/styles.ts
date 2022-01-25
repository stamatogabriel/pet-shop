import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ff6600;
`

export const LoginWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  border: solid 1px #ccc;
  padding: 2rem;
  border-radius: 1rem;

  width: 30%;
  min-width: 300px;

  background: #fff;

  button {
    width: 100%;
    background: #ff6600;
    color: #fff;
    font-weight: 700;
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: none;
  }
`
