import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const favoritesAPI = createApi({
  reducerPath: 'favorites',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getFavorites: builder.query({
      query: () => ({ url: '/drinks/favorite' }),
    }),
      addFavorite: builder.mutation({
          query: (data) => ({
              url: '/drinks/favorite/add',
              data,
              method: 'POST',
        }),
        invalidatesTags: [{type: 'POST', id: 'LIST'}]
      }),
      removeFavorite: builder.mutation({
          query: (data) => ({
          url: `/drinks/favorite/remove`,
          data,
          method: 'DELETE',
        }),
        invalidatesTags: [{type: 'DELETE', id: 'LIST'}]
      }),
  }),
});

export default favoritesAPI;
export const {
    useGetFavoritesQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
} = favoritesAPI;