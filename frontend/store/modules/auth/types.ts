import { User } from '../user/types'

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  LOADING = '@auth/LOADING',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT = '@auth/SIGN_OUT',
}

export interface SignInPayload {
  email: string
  password: string
}

export interface SignSuccessPayload {
  token: string
  profile: User
}

export interface AuthState {
  readonly token: string | null
  readonly signed: boolean
  readonly loading: boolean
}
