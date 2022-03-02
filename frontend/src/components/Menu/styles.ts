import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../styles/global";

interface CheckProps {
  checked?: boolean;
  open?: boolean;
}

export const Modal = styled.div<CheckProps>`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;

  ${(props) =>
    !props.open &&
    css`
      display: none;
    `};
`;

export const MenuItem = styled.button<CheckProps>`
  border: none;
  background: ${props => props.checked ? '#ff6600' : 'none'};
  color: ${props => props.checked ? '#fff' : '#333'};
  display: flex;
  align-items: center;
  margin: 0.1rem 0.5rem;
  padding: 0.8rem 0.5rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 1s, color 1s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background: #ff6600;
    color: #fff;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`;

export const Container = styled.div<CheckProps>`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background: #fff;
  max-width: 383px;

  position: fixed;
  top: 0;

  // overflow: auto;

  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  hr {
    border: none;
    border-top: 1px solid #a7a7a7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;

  h3 {
    margin: 1rem auto 0.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
  }

  a {
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

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
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1rem auto;

  width: 8rem;
  height: 8rem;

  border: 5px solid ${theme.colors.secondary.main};
  border-radius: 50%;

  transition: background-color 0.5s;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    transition: opacity 0.5s;
    object-fit: cover;

    // border: 2px solid ${theme.colors.secondary.main};
  }

  svg {
    position: absolute;
    visibility: hidden;
    transition: visibility 0.3s;
  }

  &:hover {
    background-color: ${theme.colors.secondary.main};
    img {
      opacity: 0.3;
    }
    svg {
      visibility: visible;
    }
  }
`;
