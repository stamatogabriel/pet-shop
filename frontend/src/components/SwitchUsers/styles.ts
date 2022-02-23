import styled from "styled-components";

interface ButtonProps {
  selected?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: 90px auto 0;
  padding: 1rem;
`;

export const CustomButtom = styled.button<ButtonProps>`
  margin-right: 1rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  border: ${(props) => (props.selected ? "none" : "1px solid #ff6600")};
  background: ${(props) => (props.selected ? "#ff6600" : "none")};
  color: ${(props) => (props.selected ? "#fff" : "#ff6600")};
  font-weight: 700;
  transition: background 1s, color 1s, border 1s;

  &:hover {
    border: none;
    background: #ff6600;
    color: #fff;
  }
`;
