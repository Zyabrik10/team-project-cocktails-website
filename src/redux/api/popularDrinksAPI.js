import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const popularDrinksAPI = createApi({
  reducerPath: 'popularDrinks',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drunk404.onrender.com/drinks',
  }),
  endpoints: builder => ({
    getPopularDrinks: builder.query({
      query: () => '/popular',
    }),
  }),
});

export default popularDrinksAPI;
export const { useGetPopularDrinksQuery } = popularDrinksAPI;
