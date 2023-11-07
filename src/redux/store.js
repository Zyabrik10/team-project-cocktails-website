import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import filtersAPI from './api/filtersAPI';
import popularDrinksAPI from './api/popularDrinksAPI';
import favoritesAPI from './api/favoritesAPI';
import themeReducer from './theme/themeSlise';

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
import myDrinksAPI from './api/myDrinksAPI';
import drinksPageAPI from './api/drinksPageAPI';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const themePersistConfig = {
  key: 'theme',
  storage: storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    theme: persistReducer(themePersistConfig, themeReducer),
    [filtersAPI.reducerPath]: filtersAPI.reducer,
    [popularDrinksAPI.reducerPath]: popularDrinksAPI.reducer,
    [favoritesAPI.reducerPath]: favoritesAPI.reducer,
    [myDrinksAPI.reducerPath]: myDrinksAPI.reducer,
    [drinksPageAPI.reducerPath]: drinksPageAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(filtersAPI.middleware)
      .concat(popularDrinksAPI.middleware)
      .concat(favoritesAPI.middleware)
      .concat(myDrinksAPI.middleware)
      .concat(drinksPageAPI.middleware),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);
