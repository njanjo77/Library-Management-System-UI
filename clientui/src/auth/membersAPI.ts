import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DomainAPI } from "../utils/ApiDomain";
import type { RootState } from "../app/store";

export type TMember = {
  user_id?: number;
  username: string;
  email: string;
  role: string;
  created_at?: string;
  updated_at?: string;
};

export const membersAPI = createApi({
  reducerPath: "membersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: DomainAPI,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Members"],
  endpoints: (builder) => ({
    // Get all members
    getAllMembers: builder.query<TMember[], void>({
      query: () => "/users",
      providesTags: ["Members"],
    }),

    // Get member by ID
    getMemberById: builder.query<TMember, number>({
      query: (id) => `/users/${id}`,
      providesTags: ["Members"],
    }),

    // Create new member
    createMember: builder.mutation<TMember, Partial<TMember>>({
      query: (newMember) => ({
        url: "/users/create",
        method: "POST",
        body: newMember,
      }),
      invalidatesTags: ["Members"],
    }),

    // Update member
    updateMember: builder.mutation<TMember, { id: number; data: Partial<TMember> }>({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Members"],
    }),

    // Delete member
    deleteMember: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Members"],
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useGetMemberByIdQuery,
  useCreateMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
} = membersAPI;
