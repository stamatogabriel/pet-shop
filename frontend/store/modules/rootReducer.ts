import { combineReducers } from 'redux'

import auth from './auth/reducer'
import user from './user/reducer'
import cookie from './cookieAccept/reducer'

const rootReducer = combineReducers({ auth, user, cookie })

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
