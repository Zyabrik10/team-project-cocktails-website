import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const favoritesAPI = createApi({
  reducerPath: 'favorites',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getFavorites: builder.query({
      query: () => ({ url: '/drinks/favorite' }),
    }),
    // getCategories: builder.query({
    //   query: () => ({ url: '/filters/categories' }),
    // }),
  }),
});

export default favoritesAPI;
export const {
  useGetFavoritesQuery,
//   useGetCategoriesQuery,
} = favoritesAPI;