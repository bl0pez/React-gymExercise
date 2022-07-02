import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { exerciseApi } from './api/exerciseApi';

export const store = configureStore({
  reducer: {
    [exerciseApi.reducerPath]: exerciseApi.reducer,
  },

  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(exerciseApi.middleware)

})