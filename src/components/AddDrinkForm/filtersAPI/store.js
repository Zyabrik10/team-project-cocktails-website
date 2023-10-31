import { configureStore } from '@reduxjs/toolkit';
import { filtersAPI } from './filtersAPI';

export const store = configureStore({
  reducer: {
    [filtersAPI.reducerPath]: filtersAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    filtersAPI.middleware,
  ],
});
