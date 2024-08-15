import { configureStore } from '@reduxjs/toolkit';
import { authSlice, salesSlice, menuSlice } from './slices';

const store = configureStore({
  reducer: {
    auth: authSlice,
    sales: salesSlice,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
