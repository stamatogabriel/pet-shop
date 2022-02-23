import styled from "styled-components";

interface UserButtonProps {
  isDelete?: boolean;
}

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Container = styled.div`
  width: 100vw;
  // height: calc(100vh - 90px);
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;

  @media only screen and (min-width: 600px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const RolesTag = styled.span`
  background: #ff6600;
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cacaca;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 0.5rem;
  box-shadow: 0px 19px 23px -5px rgba(0, 0, 0, 0.14);
  width: 100%;

  /* @media only screen and (min-width: 600px) {
    max-width: 300px;
  } */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const UserButton = styled.button<UserButtonProps>`
  background: transparent;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 8px;
  border: ${(props) =>
    props.isDelete ? "1px solid #c53030" : "1px solid #013b00"};
  color: ${(props) => (props.isDelete ? "#c53030" : "#013b00")};
`;
