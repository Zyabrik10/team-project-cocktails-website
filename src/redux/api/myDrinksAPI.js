import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const myDrinksAPI = createApi({
  reducerPath: 'my',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getMyDrinks: builder.query({
      query: ({ limit = 1, page = 1 }) => {
        const queryParams = new URLSearchParams();
        queryParams.append('limit', limit);
        queryParams.append('page', page);

        return {
          url: `/drinks/own?${queryParams.toString()}`,
        };
      },
      providesTags: [{ type: 'Own' }],
    }),

    removeMyDrink: builder.mutation({
      query: data => ({
        url: '/drinks/own/remove',
        data,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Own' }],
    }),

    addMyDrink: builder.mutation({
      query: data => ({
        url: '/drinks/own/add',
        data,
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
      invalidatesTags: [{ type: 'Own' }],
    }),
  }),
});

export default myDrinksAPI;
export const {
  useGetMyDrinksQuery,
  useRemoveMyDrinkMutation,
  useAddMyDrinkMutation,
} = myDrinksAPI;
