import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { DomainAPI } from "../utils/ApiDomain"




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
    baseQuery: fetchBaseQuery({baseUrl: DomainAPI}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "/users",
                method: "GET"
            }),
            providesTags: ["Users"]
        }),
        createUser: builder.mutation <TUser, Partial<TUser>>({
            query: (newUser) => ({
                url: "/users",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["Users"]
        })
    })
});
