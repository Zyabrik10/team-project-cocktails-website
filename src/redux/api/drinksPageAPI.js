import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const drinksPageAPI = createApi({
  reducerPath: 'drinksPage',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getDrinksPage: builder.query({
      query: ({ limit, page, ingredient, category, searchQuery }) => {
        console.log(searchQuery);
        const queryParams = new URLSearchParams();
        queryParams.append(
          'ingredient',
          ingredient === 'All ingredients' ? '' : ingredient
        );

        queryParams.append(
          'category',
          category === 'All categories' ? '' : category
        );

        queryParams.append('limit', limit);
        queryParams.append('page', page);
        queryParams.append('search', searchQuery);
        return {
          url: `/drinks/search?${queryParams.toString()}`,
        };
      },
    }),
  }),
});

export default drinksPageAPI;
export const { useGetDrinksPageQuery } = drinksPageAPI;
