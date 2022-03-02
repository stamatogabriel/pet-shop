import { InputHTMLAttributes, useEffect, useRef, useState, useCallback } from 'react'
import { FiAlertCircle } from 'react-icons/fi'
import { useField } from '@unform/core'

import { Container, Error } from './styles'

interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  rows?: number
  color?: string
}

const Textarea: React.FC<TextareaProps> = ({ name, color, ...rest }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const handleTextareaBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!textareaRef.current?.value)
  }, [])

  const handleTextareaFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused} isErrored={!!error} color={color}>
      <textarea
        defaultValue={defaultValue}
        ref={textareaRef}
        {...rest}
        onFocus={handleTextareaFocus}
        onBlur={handleTextareaBlur}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  )
}

export default Textarea
