import React, { useRef, useEffect }  from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { CustomImput, Error, Label } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label?: string;
}

interface InputReference {
  value: string;
  focus?: () => void;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const { fieldName, registerField, defaultValue = '', error } = useField(name);

  const inputElementRef = useRef<TextInput>(null);
  const inputValueRef = useRef<InputReference>({ 
    value: defaultValue, 
    focus: () =>  {
      if (inputElementRef.current)
        inputElementRef.current.focus();
      } 
    });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      setValue(ref: InputReference, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
      getValue(ref: InputReference) {
        return ref.value;
      }
    });
  }, [fieldName, registerField, inputElementRef]);

  return (
    <>
      { label && <Label>{label}</Label> }
       <CustomImput
        ref={inputElementRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </>
  );
}

export default Input;