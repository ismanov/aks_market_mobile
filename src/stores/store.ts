import {configureStore} from '@reduxjs/toolkit';
import categoryState from 'stores/slices/category-slice';
import productsState from 'stores/slices/products-slice';
import mainState from 'stores/slices/main-slice';

export const store = configureStore({
  reducer: {
    mainState,
    categoryState,
    productsState,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
