import { createSlice } from "@reduxjs/toolkit";

export const popUpActions = createSlice({
  name: "popUpActions",
  initialState: {
    isOpenLoginPopUp: false,
    isOpenPaymentPopUp: false,
    isOpenSignUpPopUp: false,
    isOpenForgotPasswordPopUp: false,
    isOpenNewPasswordPopUp: false,
  },
  reducers: {
    toggleLogin: (state, action) => {
      if (action.payload === false) state.isOpenLoginPopUp = false;
      else {
        state.isOpenLoginPopUp = !state.isOpenLoginPopUp;
      }
    },
    togglePayment: (state, action) => {
      if (action.payload === false) state.isOpenPaymentPopUp = false;
      else state.isOpenPaymentPopUp = !state.isOpenPaymentPopUp;
    },
    toggleSignUp: (state, action) => {
      if (action.payload === false) state.isOpenSignUpPopUp = false;
      else state.isOpenSignUpPopUp = !state.isOpenSignUpPopUp;
    },
    toggleForgotPassword: (state, action) => {
      if (action.payload === false) state.isOpenForgotPasswordPopUp = false;
      else state.isOpenForgotPasswordPopUp = !state.isOpenForgotPasswordPopUp;
    },
    toggleNewPassword: (state, action) => {
      if (action.payload === false) state.isOpenNewPasswordPopUp = false;
      else state.isOpenNewPasswordPopUp = !state.isOpenNewPasswordPopUp;
    },
  },
});

export const {
  toggleLogin,
  togglePayment,
  toggleForgotPassword,
  toggleSignUp,
  toggleNewPassword,
} = popUpActions.actions;
export default popUpActions.reducer;
