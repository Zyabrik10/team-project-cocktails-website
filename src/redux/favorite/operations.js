import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://drunk404.onrender.com';

export const fetchFavorite = createAsyncThunk(
  'favorite/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/drinks/favorite');
      console.log('response.data', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
