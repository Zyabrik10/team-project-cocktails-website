import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { filtersAPI } from 'components/AddDrinkForm/filtersAPI';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [filtersAPI.reducerPath]: filtersAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(filtersAPI.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
