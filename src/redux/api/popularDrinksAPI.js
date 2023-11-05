import { createApi } from '@reduxjs/toolkit/query/react';
// import axiosBaseQuery from './axiosBaseQuery';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const popularDrinksAPI = createApi({
  reducerPath: 'popularDrinks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drunk404.onrender.com/drinks',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    getPopularDrinks: builder.query({
      query: () => ({ url: '/drinks/popular' }),
    }),
    getMainPageCocktails: builder.query({
      query: () => ({ url: '/mainpage' }),
    }),
  }),
});

export default popularDrinksAPI;
export const { useGetPopularDrinksQuery, useGetMainPageCocktailsQuery } =
  popularDrinksAPI;
