import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { ENV } from '@/config/env'

import { CombinedMiddleware, CombinedReducer } from './modules'

export const store = configureStore({
  reducer: CombinedReducer,
  devTools: ENV.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(CombinedMiddleware),
})

// enable the refetchOnFocus feature.
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
