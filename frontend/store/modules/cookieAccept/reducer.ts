import produce from 'immer'
import { IAcceptCookies } from './types'

const INITIAL_STATE = {
  acceptedCookies: {
    needed: true,
    marketing: true,
    analyticals: true,
    functionals: true,
  },
  understood: false,
}

export default function user(state: IAcceptCookies = INITIAL_STATE, action): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cookies/CHANGE_ACCEPT': {
        draft.acceptedCookies = action.payload
        break
      }

      case '@cookies/UNDERSTOOD': {
        draft.understood = action.payload
        break
      }

      default:
    }
  })
}
