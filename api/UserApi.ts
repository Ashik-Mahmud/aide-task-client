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
      query: (data: any) =>
        `/user/all?page=${data?.page}&limit=${data?.limit}&q=${data?.q}`,
      providesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (data: any) => ({
        url: `/user/delete/${data?.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),

    editUser: builder.mutation({
      query: (data: any) => ({
        url: `/user/update/${data?.id}`,
        method: "PUT",
        body: data.data,
      }),
      invalidatesTags: ["User"],
    }),

    // products
    addProduct: builder.mutation({
      query: (data: any) => ({
        url: `/product/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useEditUserMutation,
  useAddProductMutation,
} = UserApi;
export default UserApi;
