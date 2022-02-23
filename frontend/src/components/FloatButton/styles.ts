import styled from 'styled-components';
import { theme } from '../../styles/global';

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.success.dark};
  border: none;
  border-radius: 50%;
  color: ${theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 2rem;
  right: 2rem;
`;
