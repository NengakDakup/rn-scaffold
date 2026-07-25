import { combineReducers } from '@reduxjs/toolkit';
import { authApi } from '@features/auth/api';
import authReducer from '@features/auth/slice';

export const rootReducer = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
});
