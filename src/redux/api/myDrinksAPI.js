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
      query: drinkId => ({
        url: '/drinks/own/remove',
        body: { id: drinkId },
        method: 'DELETE',
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
