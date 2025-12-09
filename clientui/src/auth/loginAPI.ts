import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { DomainAPI } from "@/utils/ApiDomain"

export type TLoginResponse ={
    message: string,
    token: string,
    user:{
      user_id: string,
      username: string,
      role: string,
      created_at: string,
      updated_at: string
    }
}
export type LoginInputs ={
    email: string;
    password:string;
}

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({baseUrl:DomainAPI,
        credentials: 'include',
        prepareHeaders: (headers) => {
      // If you use Bearer token (you do!)
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers
    },
    }),
    tagTypes: ['Login'],
    endpoints:(builder) =>({
        loginUser:builder.mutation<TLoginResponse, LoginInputs>({
            query:(loginData) =>({
               url: '/users/login',
               method:'POST',
               body: loginData 
            }),
            invalidatesTags:['Login']
        })
    })
})
export const { useLoginUserMutation } = loginApi