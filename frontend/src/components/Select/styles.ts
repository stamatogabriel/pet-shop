import styled, { css } from "styled-components";
import { theme } from "../../styles/global";
import Tooltip from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem;
  width: 100%;
  border-radius: 8px;
  border: solid 1px ${theme.colors.black.secondary};

  ${(props) =>
    props.isErrored &&
    css`
      color: ${theme.colors.error};
      border-color: ${theme.colors.error};
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: ${theme.colors.secondary.dark};
      border-color: ${theme.colors.secondary.dark};
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: ${theme.colors.secondary.dark};
    `}
  display: flex;
  align-items: center;

  select {
    flex: 1;
    background: transparent;
    border: none;
    color: ${theme.colors.black.main};
    ::placeholder {
      color: ${theme.colors.black.secondary};
    }
    outline: none;
    &::-ms-expand {
      display: none;
    }
    :invalid {
      color: ${theme.colors.error};
    }
    option {
      color: ${theme.colors.black.main};
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${theme.colors.error};
    color: #fff;

    &::before {
      border-color: ${theme.colors.error} transparent;
    }
  }
`;
