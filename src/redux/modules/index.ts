import { userApi } from './user/user.api'
import { userSlice } from './user/user.slice'

export const persistedReducerNames = [userSlice.name]

export const combinedReducer = {
  [userSlice.name]: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
}

export const combinedMiddleware = [userApi.middleware]
