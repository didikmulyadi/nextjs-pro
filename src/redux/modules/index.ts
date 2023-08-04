import { userApi } from "./user/user.api";
import { userSlice } from "./user/user.slice";

export const CombinedReducer = {
  [userSlice.name]: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer,
};

export const CombinedMiddleware = [userApi.middleware];
