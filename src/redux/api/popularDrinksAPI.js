import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const popularDrinksAPI = createApi({
  reducerPath: 'popularDrinks',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getPopularDrinks: builder.query({
      query: () => ({ url: '/drinks/popular' }),
    }),
    getMainPageCocktails: builder.query({
      query: () => ({ url: '/drinks/mainpage' }),
    }),
  }),
});

export default popularDrinksAPI;
export const { useGetPopularDrinksQuery, useGetMainPageCocktailsQuery } =
  popularDrinksAPI;
