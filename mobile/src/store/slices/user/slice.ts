import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { clearStore } from './actions'
import { UserState } from './types'

const INITIAL_STATE: UserState = {
  profile: null,
}

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => payload,
  },
  extraReducers: {
    [clearStore.type]: () => INITIAL_STATE,
  },
})

export const { setUser } = user.actions

export default user
