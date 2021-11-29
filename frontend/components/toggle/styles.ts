import styled from 'styled-components'

interface LabelProps {
  checked?: boolean
  small?: boolean
  color?: string
}

export const Container = styled.div<LabelProps>`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  width: 75%;

  .switch {
    position: relative;
    display: inline-block;
    width: ${(props) => (props.small ? '45px' : '60px')};
    height: ${(props) => (props.small ? '20' : '34px')};
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => (props.color ? '#999' : '#2196f3')};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: ${(props) => (props.small ? '12px' : '26px')};
    width: ${(props) => (props.small ? '12px' : '26px')};
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => (props.color ? props.color : '#2196f3')};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #999;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`

export const CustomLabel = styled.label<LabelProps>`
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${(props) => (props.checked ? '#033952' : '#a7a7a7')};
  font-weight: ${(props) => (props.checked ? '600' : '400')};
`
