import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const filtersAPI = createApi({
  reducerPath: 'filters',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://drunk404.onrender.com/filters',
  }),
  endpoints: builder => ({
    getGlasses: builder.query({
      query: () => '/glasses',
    }),
    getCategories: builder.query({
      query: () => '/categories',
    }),
    getIngredients: builder.query({
      query: () => '/ingredients',
    }),
  }),
});

export default filtersAPI;
export const {
  useGetGlassesQuery,
  useGetCategoriesQuery,
  useGetIngredientsQuery,
} = filtersAPI;