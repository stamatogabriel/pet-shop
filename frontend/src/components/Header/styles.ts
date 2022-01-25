import styled from 'styled-components'

export const Container = styled.header`
  min-width: 100vw;
  top: 0;
  position: fixed;
  background: #fff;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 4rem !important;
    width: 4rem !important;
  }

  button {
    background: none;
    border: none;
  }
`
