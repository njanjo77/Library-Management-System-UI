import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { DomainAPI } from "../utils/ApiDomain"
import type { RootState } from "../app/store";



export type TUser = {
    user_id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
    updated_at: string;

}


//User creation
export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: DomainAPI,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).user.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<{data: TUser[]}, void>({
            query: () => "/users",
            providesTags: ["Users"],
        }),
        getMembers: builder.query<{data: TUser[]}, void>({
            query: () => "/users/members",
            providesTags: ["Users"],
        }),
        createUsers: builder.mutation <TUser, Partial<TUser>>({
            query: (newUser) => ({
                url: "/users/create",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
    })
});

export const {useGetUsersQuery, useGetMembersQuery, useCreateUsersMutation, useDeleteUserMutation} = usersAPI;
