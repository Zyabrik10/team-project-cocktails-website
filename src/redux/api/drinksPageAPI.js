import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const drinksPageAPI = createApi({
  reducerPath: 'drinksPage',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getDrinksPage: builder.query({
      query: ingredients => {
        if (ingredients !== 'All ingredients') {
          return {
            url: `/drinks/search?page=1&limit=20&ingredient=${ingredients}`,
          };
        }
        return {
          url: `/drinks/search?page=1&limit=20`,
        };
      },
    }),
  }),
});

export default drinksPageAPI;
export const { useGetDrinksPageQuery } = drinksPageAPI;
