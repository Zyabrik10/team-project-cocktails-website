import { createSlice } from '@reduxjs/toolkit';
import { signup, signin, signout, refreshUser, updateUser } from './operations';

const initialState = {
  user: { username: null, email: null, birthDate: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log('Successfully Logined.');
    },
    [signin.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log('Successfully Logined.');
    },
    [signout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      console.log(`Successful logout.`);
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
    [updateUser.fulfilled](state, action) {
      state.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
