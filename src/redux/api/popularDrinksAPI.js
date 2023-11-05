import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const popularDrinksAPI = createApi({
  reducerPath: 'popularDrinks',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getPopularDrinks: builder.query({
      query: () => ({ url: '/drinks/popular' }),
    }),
  }),
});

export default popularDrinksAPI;
export const { useGetPopularDrinksQuery } = popularDrinksAPI;
