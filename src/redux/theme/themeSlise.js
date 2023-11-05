import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      toast(`${state.theme} theme`)
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
