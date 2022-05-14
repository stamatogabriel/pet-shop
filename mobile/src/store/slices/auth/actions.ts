import { createAction } from '@reduxjs/toolkit'
import { AuthTypes, SignInPayload, SignUpPayload } from './types'

export const signInRequest = createAction<SignInPayload>(AuthTypes.SIGN_IN_REQUEST)

export const signUpRequest = createAction<SignUpPayload>(AuthTypes.SIGN_UP_REQUEST)

export const clearStore = createAction('clearStore')
