import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { clearStore } from './actions'
import { AuthState } from './types'

const INITIAL_STATE: AuthState = {
  token: null,
  signed: false,
  loading: false,
}

const auth = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state) => {
      return { ...state, loading: true }
    },
    signFailure: (state) => {
      return { ...state, loading: false }
    },
    signInSuccess: (state, { payload }: PayloadAction<{ token: string }>) => {
      return { ...state, loading: false, token: payload.token, signed: true }
    },
    signOut: () => INITIAL_STATE,
  },
  extraReducers: {
    [clearStore.type]: () => INITIAL_STATE,
  },
})

export const { setLoading, signFailure, signOut, signInSuccess } = auth.actions

export default auth
