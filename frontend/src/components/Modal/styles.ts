import styled from "styled-components";

interface ContainerProps {
  open: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;

  width: 100vw;
  height: 100vh;

  z-index: 200;

  background: rgba(0, 0, 0, 0.5);

  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;

  @media only screen and (min-width: 600px) {
    max-width: 700px;
    max-height: 500px;
  }
`;
