import {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
  FormEvent
} from "react";
import { IconBaseProps } from "react-icons/lib";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";
import { cepMask, cpfMask, telMask } from "../../utils/masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isCpf?: boolean;
  isCep?: boolean;
  isPhone?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  name,
  isCpf,
  isCep,
  isPhone,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleKeyUp = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (isCpf) {
        e.currentTarget.maxLength = 14
        const value = cpfMask(e.currentTarget.value)
        e.currentTarget.value = value
      }

      if (isCep) {
        e.currentTarget.maxLength = 10
        const value = cepMask(e.currentTarget.value)
        e.currentTarget.value = value
      }

      if (isPhone) {
        e.currentTarget.maxLength = 15
        const value = telMask(e.currentTarget.value)
        e.currentTarget.value = value
      }
    },
    [isCep, isCpf, isPhone]
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyUp={handleKeyUp}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
