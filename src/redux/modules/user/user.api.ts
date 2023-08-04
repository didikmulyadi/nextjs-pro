import { ENV } from "@/config/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "./user.type";
import {
  IUpdateUserRequestBody,
  IUpdateUserResponse,
} from "./user.type.reqres";
import { GetState } from "@/redux/libs";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: ENV.API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState as GetState)().user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);

        return headers;
      }
    },
  }),
  tagTypes: ["GET_ME"],
  endpoints: (builder) => ({
    getMe: builder.query<IUser, void>({
      query: () => ({
        /**
         * 1 is an example, in the real case we use token to determine the user
         */
        url: "/users/1",
      }),
      /**
       * Every tags should be registered in tagTypes
       */
      providesTags: ["GET_ME"],
    }),
    updateMe: builder.mutation<IUpdateUserResponse, IUpdateUserRequestBody>({
      query: (body) => {
        return {
          url: `/users/1`,
          body,
          method: "PUT",
        };
      },
      invalidatesTags: ["GET_ME"],
    }),
  }),
});

export const { useGetMeQuery, useUpdateMeMutation } = userApi;
