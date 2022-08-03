import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMainState, IUserData} from 'interfaces';

const initialState: IMainState = {
  loader: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setVerificationId: (state, action: PayloadAction<string>) => {
      state.verificationId = action.payload;
    },
    setUserData: (state, action: PayloadAction<IUserData>) => {
      state.userData = action.payload;
    },
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {setUserId, setVerificationId, setUserData, setLoader, setError} =
  mainSlice.actions;
export default mainSlice.reducer;
