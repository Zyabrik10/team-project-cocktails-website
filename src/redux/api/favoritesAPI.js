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
          query: (drinkId) => ({
              url: '/drinks/favorite/add',
              method: 'POST',
              body: { drinkId },
          })
      }),
      removeFavorite: builder.mutation({
          query: (drinkId) => ({
              url: `/drinks/favorite/remove/${drinkId}`,
              method: 'DELETE',
          })
      }),
  }),
});

export default favoritesAPI;
export const {
    useGetFavoritesQuery,
    useAddFavoriteMutation,
    useRemoveFavoriteMutation,
} = favoritesAPI;