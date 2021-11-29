import { action } from 'typesafe-actions'
import { CookiesTypes, IAcceptCookies } from './types'

export const changeCookies = (payload: IAcceptCookies): any =>
  action(CookiesTypes.CHANGE_ACCEPT, payload)

export const changeUnderstood = (payload: boolean): any => action(CookiesTypes.UNDERSTOOD, payload)
