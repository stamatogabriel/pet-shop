import { action } from 'typesafe-actions'
import { User } from './types'
import { AuthTypes } from '../auth/types'

export const updateUser = (profile: User): any => action(AuthTypes.SIGN_IN_SUCCESS, profile)
