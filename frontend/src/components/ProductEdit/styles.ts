import styled from "styled-components";

interface UserButtonProps {
  isCancel?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`

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
    props.isCancel ? "1px solid #020070" : "1px solid #013b00"};
  color: ${(props) => (props.isCancel ? "#020070" : "#013b00")};

  min-width: 120px;
`;
