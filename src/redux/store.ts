import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import authReducer from './features/auth/auth-slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [logger],
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
