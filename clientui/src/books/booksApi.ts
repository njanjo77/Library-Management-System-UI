import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DomainAPI } from "../utils/ApiDomain";
import type { RootState } from "../app/store";

export type TBook = {
  book_id?: number;
  title: string;
  author: string;
  category_id?: number | null;
  publication_year?: number | null;
  stock_quantity: number;
  created_at?: string;
  updated_at?: string;
};

export const booksAPI = createApi({
  reducerPath: "booksAPI",
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
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    // Get all books
    getAllBooks: builder.query<{data:TBook[]}, void>({
      query: () => "/books",
      providesTags: ["Books"],
    }),

    // Get book by ID
    getBookById: builder.query<TBook, number>({
      query: (id) => `/books/${id}`,
      providesTags: ["Books"],
    }),

    // Create new book
    createBook: builder.mutation<TBook, Partial<TBook>>({
      query: (newBook) => ({
        url: "/books/create",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    // Update book
    updateBook: builder.mutation<TBook, { id: number; data: Partial<TBook> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    // Delete book
    deleteBook: builder.mutation<void, number>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksAPI;
