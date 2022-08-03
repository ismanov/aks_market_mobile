import api from 'api';
import {IConfirmationData, IUserData} from 'interfaces';
import {
  setError,
  setLoader,
  setUserId,
  setVerificationId,
} from 'stores/slices/main-slice';
import {AppDispatch} from 'stores/store';

export const registration = (data: IUserData) => (dispatch: AppDispatch) => {
  dispatch(setLoader(true));
  api.auth
    .registration(data)
    .then(async (res: any) => {
      if (res) {
        console.log(res);

        dispatch(setVerificationId(res.verificationId));
      }
    })
    .catch(e => {
      dispatch(setError(e.error));
      console.log(e);
    })
    .finally(() => dispatch(setLoader(false)));
};

export const confirmation =
  (data: IConfirmationData) => (dispatch: AppDispatch) => {
    dispatch(setLoader(true));
    api.auth
      .confirmation(data)
      .then(async (res: any) => {
        if (res) {
          console.log(res);

          dispatch(setUserId(res.userId));
        }
      })
      .catch(e => {
        dispatch(setError(e.message));
      })
      .finally(() => dispatch(setLoader(false)));
  };
