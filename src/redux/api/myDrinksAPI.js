import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const myDrinksAPI = createApi({
  reducerPath: 'my',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getMyDrinks: builder.query({
      query: () => ({ url: '/drinks/own' }),
    }),

    removeMyDrink: builder.mutation({
      query: drinkId => ({
        url: '/drinks/own/remove',
        method: 'DELETE',
        body: {
          _id: drinkId
        }
      }),
    }),
  }),
});

export default myDrinksAPI;
export const {
  useGetMyDrinksQuery,
  useRemoveMyDrinkMutation,
} = myDrinksAPI;