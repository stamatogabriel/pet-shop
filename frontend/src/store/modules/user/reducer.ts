// import produce from 'immer'
import { Reducer } from 'redux'
import { UserState } from './types'

import { AuthTypes } from '../auth/types'

const INITIAL_STATE: UserState | null | undefined = {
  profile: null,
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS:
      return { ...state, profile: action.payload.profile }

    default:
      return state
  }
}

export default reducer
