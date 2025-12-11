import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../app/store";
import { DomainAPI } from "../utils/ApiDomain";

export type TBorrowRecord = {
  borrow_id?: number;
  user_id: number;
  book_id: number;
  borrow_date: string;
  due_date: string;
  return_date?: string | null;
  status: 'Borrowed' | 'Overdue' | 'Returned';
  created_at?: string;
  updated_at?: string;
};

const borrowRecordsAPI = createApi({
  reducerPath: "borrowRecordsAPI",
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
  tagTypes: ["BorrowRecords"],
  endpoints: (builder) => ({
    getAllBorrowRecords: builder.query<{data:TBorrowRecord[]}, void>({
      query: () => "/borrow-records",
      providesTags: ["BorrowRecords"],
    }),
    getBorrowRecordById: builder.query<TBorrowRecord, number>({
      query: (id) => `/borrow-records/${id}`,
      providesTags: ["BorrowRecords"],
    }),
    createBorrowRecord: builder.mutation<TBorrowRecord, Partial<TBorrowRecord>>({
      query: (newRecord) => ({
        url: "/borrow-records/create",
        method: "POST",
        body: newRecord,
      }),
      invalidatesTags: ["BorrowRecords"],
    }),
    updateBorrowRecord: builder.mutation<TBorrowRecord, { id: number; data: Partial<TBorrowRecord> }>({
      query: ({ id, data }) => ({
        url: `/borrow-records/update/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["BorrowRecords"],
    }),
    clearBorrowRecord: builder.mutation<void, { id: number; data: Partial<TBorrowRecord> }>({
      query: ({ id, data }) => ({
        url: `/borrow-records/clear/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["BorrowRecords"],
    }),
    deleteBorrowRecord: builder.mutation<void, number>({
      query: (id) => ({
        url: `/borrow-records/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BorrowRecords"],
    }),
  }),
});

export const {
  useGetAllBorrowRecordsQuery,
  useGetBorrowRecordByIdQuery,
  useCreateBorrowRecordMutation,
  useUpdateBorrowRecordMutation,
  useClearBorrowRecordMutation,
  useDeleteBorrowRecordMutation,
} = borrowRecordsAPI;

export default borrowRecordsAPI;