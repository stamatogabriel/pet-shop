import styled, { css } from 'styled-components'
import { theme } from '../../styles/global'
import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
  color?: string
}

export const Container = styled.div<ContainerProps>`
  padding: 1rem;
  width: 100%;
  border-radius: 4px;
  border: solid 1px ${theme.colors.black.secondary};
  // border: solid 1px ${(props) => (props.color ? props.color : '#7a7a7a')};
  ${(props) =>
    props.color &&
    css`
      color: ${props.color} !important;
    `};

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;

      svg {
        color: #c53030 !important;
      }
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff6600;
      border-color: #ff6600;

      svg {
        color: #ff6600 !important;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff6600;

      svg {
        color: #ff6600 !important;
      }
    `}

  display: flex;
  align-items: center;

  textarea {
    background: transparent;
    flex: 1;
    border: 0;
    color: ${(props) => (props.color ? props.color : '#7a7a7a')};
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}
  }

  button {
    background: transparent;
    border: none;

    svg {
      margin: 0;
      ${(props) =>
        props.color &&
        css`
          color: ${props.color};
        `}
    }
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
