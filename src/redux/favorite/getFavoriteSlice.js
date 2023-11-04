import { createSlice } from '@reduxjs/toolkit';
import { signout } from 'redux/auth/operations';
import { fetchFavorite } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getFavoriteSlice = createSlice({
  name: 'favorite',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchFavorite.pending]: handlePending,
    [fetchFavorite.fulfilled](state, action) {
      console.log('action', action.payload);
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;

      console.log('action.payload');
    },
    [fetchFavorite.rejected]: handleRejected,
    [fetchFavorite.rejected]: handleRejected,
    [signout.fulfilled](state) {
      state.items = [];
      state.error = null;
      state.isLoading = false;
    },
  },
});
export const getFavoriteReducer = getFavoriteSlice.reducer;
