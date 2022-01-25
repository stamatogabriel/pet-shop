import { action } from 'typesafe-actions'
import { AuthTypes, SignInPayload, SignSuccessPayload } from './types'

export const signInRequest = (payload: SignInPayload): any =>
  action(AuthTypes.SIGN_IN_REQUEST, payload)

export const setLoading = (): any => action(AuthTypes.LOADING)

export const signInSuccess = (payload: SignSuccessPayload): any =>
  action(AuthTypes.SIGN_IN_SUCCESS, payload)

export const signFailure = (): any => action(AuthTypes.SIGN_FAILURE)

export const signOut = (): any => action(AuthTypes.SIGN_OUT)
