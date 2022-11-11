import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import persistedReducer from './persisted-root-reducer.js'
import { persistStore } from 'redux-persist'

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]
})

export const persistor = persistStore(store)