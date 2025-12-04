// Configure the store
import { loginApi } from "@/auth/loginAPI"
import { usersAPI } from "@/auth/usersAPI"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storage from 'redux-persist/es/storage'




const persistConfig = {
  key: 'root',
    version: 1,
    storage,
    whitelist: ['User']
    // blacklist: [usersAPI.reducerPath, loginApi.reducerPath],
}


const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer,
    [loginApi.reducerPath]: loginApi.reducer
});


export const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
        .concat(usersAPI.middleware)
        .concat(loginApi.middleware)

})

export const persistedStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>