/**
 * Used to store the signed user data from signin API e.g. Firebaseu Auth, your authentication
 */

import { createSlice } from "@reduxjs/toolkit";

import { IUserSlice } from "./user.type";

import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IUserSlice = { name: "", token: "" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<IUserSlice>) {
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
  },
});

export const { updateUser } = userSlice.actions;
