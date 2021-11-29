import storage from 'redux-persist/lib/storage'

import { persistReducer } from 'redux-persist'
import { Reducer, Action } from 'redux'

const persistReducers = (reducers: Reducer<unknown, Action<any>>): any => {
  const persitedReducer = persistReducer(
    {
      key: '@petshop',
      storage,
      whitelist: ['auth', 'user', 'cookie'],
    },
    reducers
  )

  return persitedReducer
}

export default persistReducers
