import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth/slice'
import user from './user/slice'

export default combineReducers({
  auth: auth.reducer,
  user: user.reducer,
})
