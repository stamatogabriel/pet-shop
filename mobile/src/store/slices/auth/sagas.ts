/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { takeLatest, call, put, all } from 'redux-saga/effects'
import { signInRequest } from './actions'
import { setLoading, signFailure, signInSuccess } from './slice'
import { setUser } from '../user/slice'

import api from '../../../services/api'

import { AuthTypes } from './types'

// import { toast } from 'react-toastify'

function* signIn(action: ReturnType<typeof signInRequest>) {
  yield put(setLoading())
  try {
    const response = yield call(api.post, 'auth', action.payload)

    console.log(response)

    const { access_token, user } = response.data

    yield put(signInSuccess({ token: access_token }))
    yield put(setUser({ profile: user }))

  } catch (err) {
    yield put(signFailure())
    console.log(err)
//    toast.error('Algo deu errado, por favor, verifique suas credenciais')
  }
}

export function* signUp(data: any): any {
  yield put(setLoading())
  try {
  //   const response = yield call(api.post, 'ecommerce-auth/new', data.payload)
  //  const { token, student } = response.data

    // yield put(signInSuccess({ token }))
    // yield put(setUser({ profile: student }))

  } catch (err: any) {
    yield put(signFailure())

    if (err?.response && err?.response.data.error === 'User Already exist')
       return // toast.error('Usuário já cadastrado')
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
])
