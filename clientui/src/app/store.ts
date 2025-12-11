// Configure the store
import { loginApi } from "@/auth/loginAPI"
import { usersAPI } from "@/auth/usersAPI"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import storage from 'redux-persist/es/storage'
import userSlice  from "../auth/userSlice"
import { booksAPI } from "@/books/booksApi"



const persistConfig = {
  key: 'root',
    version: 1,
    storage,
    whitelist: ['user']
    // blacklist: [usersAPI.reducerPath, loginApi.reducerPath],
}


const rootReducer = combineReducers({
    [usersAPI.reducerPath]: usersAPI.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [booksAPI.reducerPath]: booksAPI.reducer,
    user: userSlice,
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
        .concat(booksAPI.middleware)

})

export const persistedStore = persistStore(store)
export type RootState = ReturnType<typeof store.getState>