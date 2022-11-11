import userReducer from './reducer/user.reducer.js'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer