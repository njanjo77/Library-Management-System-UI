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
        createUsers: builder.mutation <TUser, Partial<TUser>>({
            query: (newUser) => ({
                url: "/users/create",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["Users"]
        })
    })
});

export const {useCreateUsersMutation} = usersAPI;
