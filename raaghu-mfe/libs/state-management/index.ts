import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {loginReducer} from './public.api'
import {forgotPasswordReducer} from './forgot-password/forgotpassword-slice'
import {subscriptionReducer} from './subscription/subscription-slice'
import { useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['forgotPassword']
}
const rootReducer = combineReducers({
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,
  subscription: subscriptionReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {persistedReducer},
  middleware: [thunk]
});
export const persistor = persistStore(store);


// export const store = configureStore({
//   reducer:{login : loginReducer},
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     serializableCheck: false,
//   }),
// })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 