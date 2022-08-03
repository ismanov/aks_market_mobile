import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct, IProductsState} from 'interfaces';

const initialState: IProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Array<Partial<IProduct>>>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalProductsCount: (state, action: PayloadAction<number>) => {
      state.totalProductsCount = action.payload;
    },
  },
});

export const {
  setProducts,
  setProduct,
  setLoader,
  setTotalProductsCount,
  setPage,
} = productsSlice.actions;
export default productsSlice.reducer;
