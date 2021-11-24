import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from '@redux-saga/core'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'
import persistReducers from './persistReducers'

const sagaMiddleware = createSagaMiddleware()

export const store: Store = createStore(
  persistReducers(rootReducer),
  applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
