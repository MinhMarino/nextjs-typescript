import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authSlice from './slice/authSlice';

const makeStore = () =>
  configureStore({
    reducer: {
        authSlice: authSlice
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);