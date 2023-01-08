import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server_url } from "../config/config";

const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${server_url}` }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
export default AuthApi;
