import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const favoritesAPI = createApi({
  reducerPath: 'favorites',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getFavorites: builder.query({
      query: ({ limit = 1, page = 1 }) => {
        const queryParams = new URLSearchParams();
        queryParams.append('limit', limit);
        queryParams.append('page', page);

        return {
          url: `/drinks/favorite?${queryParams.toString()}`,
        };
      },

      providesTags: [{ type: 'Fav' }],
    }),
    addFavorite: builder.mutation({
      query: data => ({
        url: '/drinks/favorite/add',
        data,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'Fav' }],
    }),
    removeFavorite: builder.mutation({
      query: data => ({
        url: `/drinks/favorite/remove`,
        data,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Fav' }],
    }),
  }),
});

export default favoritesAPI;
export const {
  useGetFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = favoritesAPI;
