import { takeLatest, call, put, all } from 'redux-saga/effects'
import { signInSuccess, signFailure } from './actions'
// import { Router } from 'react-router-dom'

import api from '../../../services/api'

import { SignInPayload, AuthTypes } from './types'
import { Action } from 'redux'

interface SignInAction extends Action, SignInPayload {
  type: AuthTypes.SIGN_IN_REQUEST
}

export function* signIn(data: any): any {
  try {
    const response = yield call(api.post, 'auth', data.payload)

    const { access_token, user } = response.data

    // api.defaults.headers.Authorization = `Bearer ${access_token}`

    yield put(signInSuccess({ token: access_token, profile: user }))

    // Router.push('/')
  } catch (err) {
    console.log(err)
    yield put(signFailure())
  }
}

export function setToken(payload: any): any {
  if (!payload) return

  // if (payload) return (api.defaults.headers.Authorization = `Bearer ${payload}`)
}

export function signOut(): any {
  // history.push('/')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest<SignInAction>(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
])
