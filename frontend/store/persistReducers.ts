import storage from 'redux-persist/lib/storage'

import { persistReducer } from 'redux-persist'
import { Reducer, Action } from 'redux'

export default (reducers: Reducer<unknown, Action<any>>): any => {
  const persitedReducer = persistReducer(
    {
      key: '@ecommerce',
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  )

  return persitedReducer
}
