import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import * as Yup from 'yup'

import { FiMail, FiLock } from 'react-icons/fi'

import { useDispatch, useSelector } from 'react-redux'
import { signFailure, signInRequest } from '../../store/modules/auth/actions'

import getValidationError from '../../utils/getValidationErrors'

import { Container, LoginWrapper } from './styles'
import Input from '../Input'
import { RootState } from '../../store/modules/rootReducer'
import { SignInPayload } from '../../store/modules/auth/types'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles | any>()
  const { loading } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const handleLogin = useCallback(
    async (data: SignInPayload) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string().required('Informe o seu email').email('Informe um email válido'),
          password: Yup.string().min(6, 'Senha deve conter pelo menos seis caracteres'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        dispatch(signInRequest(data))
      } catch (err) {
        dispatch(signFailure())

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err)
          formRef.current?.setErrors(errors)
        }
      }
    },
    [dispatch]
  )

  return (
    <Container>
      <LoginWrapper>
        <h1>Faça seu login</h1>
        <Form ref={formRef} onSubmit={handleLogin} autoComplete="false">
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input name="password" placeholder="Senha" type="password" icon={FiLock} />
          <button type="submit" disabled={loading}>
            {loading ? 'Carregando' : 'Entrar'}
          </button>
        </Form>
      </LoginWrapper>
    </Container>
  )
}

export default Login
