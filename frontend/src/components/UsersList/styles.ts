import styled from "styled-components";

interface UserButtonProps {
  isDelete?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 90px);
  max-width: 1300px;
  margin: 90px auto 0;
  padding: 1rem;
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
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const UserButton = styled.button<UserButtonProps>`
  background: transparent;
  padding: 0.5rem;
  border-radius: 8px;
  border: ${(props) =>
    props.isDelete ? "1px solid #c53030" : "1px solid #013b00"};
  color: ${(props) => (props.isDelete ? "#c53030" : "#013b00")};
`;
