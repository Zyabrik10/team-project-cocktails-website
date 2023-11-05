import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const filtersAPI = createApi({
  reducerPath: 'filters',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getGlasses: builder.query({
      query: () => ({ url: '/filters/glasses' }),
    }),
    getCategories: builder.query({
      query: () => ({ url: '/filters/categories' }),
    }),
    getIngredients: builder.query({
      query: () => ({ url: '/filters/ingredients' }),
    }),
  }),
});

export default filtersAPI;
export const {
  useGetGlassesQuery,
  useGetCategoriesQuery,
  useGetIngredientsQuery,
} = filtersAPI;
