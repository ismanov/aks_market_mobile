import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICategoryState, ICategory} from 'interfaces';

const initialState: ICategoryState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<ICategory>>) => {
      state.categories = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalCategoriesCount: (state, action: PayloadAction<number>) => {
      state.totalCategoriesCount = action.payload;
    },
  },
});

export const {setCategories, setLoader, setTotalCategoriesCount, setPage} =
  categorySlice.actions;
export default categorySlice.reducer;
