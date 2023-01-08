import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { server_url } from "../config/config";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const prepareHeaders = (headers: any, { getState }: any) => {
  const token = cookies.get("aide")?.token;
  if (token) {
    headers.set("authorization", `Bearer ${token}`);

    return headers;
  }
};

const UserApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${server_url}`, prepareHeaders }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    // create new user
    createUser: builder.mutation({
      query: (body: any) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    getUsers: builder.query({
      query: () => "/user/all",
    }),
  }),
});

export const { useGetUsersQuery, useCreateUserMutation } = UserApi;
export default UserApi;
