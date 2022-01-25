import { persistReducer } from 'redux-persist'
import { Reducer, Action } from 'redux'
import storage from './storage'

// import { CookieStorage } from 'redux-persist-cookie-storage'
// import Cookies from 'js-cookie'

const persistReducers = (reducers: Reducer<unknown, Action<any>>): any => {
  const persitedReducer = persistReducer(
    {
      key: '@petshop',
      storage, //: new CookieStorage(Cookies),
      whitelist: ['auth', 'user', 'cookie'],
    },
    reducers
  )

  return persitedReducer
}

export default persistReducers
