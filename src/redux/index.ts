// redux/store.ts

import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

// Export these for use in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
