import { User } from '../user/types'

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_UP_REQUEST = 'auth/SIGN_UP_REQUEST',
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
  profile: User | any
}

export interface SignUpPayload {
  name: string
  email: string
  telephone?: string
  document: string
  password: string
}

export interface AuthState {
  readonly token: string | null
  readonly signed: boolean
  readonly loading: boolean
}
