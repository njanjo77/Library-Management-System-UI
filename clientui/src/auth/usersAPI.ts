import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { DomainAPI } from "../utils/ApiDomain"




export type TUser = {
    user_id: number;
    username: string;
    email: string;
    password: string;
    role: string;
    date: string;
    // created_at: string;
    // updated_at: string;

}


//User creation
export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({baseUrl: DomainAPI}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        createUser: builder.mutation < {message: string }, Partial<TUser>>({
            query: (newUser) => ({
                url: "/users",
                method: "POST",
                body: newUser
            }),
            invalidatesTags: ["Users"]
        })
    })
});
