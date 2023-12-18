import { createSlice } from "@reduxjs/toolkit";

export const popUpActions = createSlice({
  name: "popUpActions",
  initialState: {
    isOpenLoginPopUp: false,
    isOpenAddToCartPopUp: false,
    isOpenForgotPasswordPopUp: false,
    isOpenSignUpPopUp: false,
  },
  reducers: {
    toggleLogin: (state, action) => {
      if (action.payload === false) state.isOpenLoginPopUp = false;
      else {
        state.isOpenLoginPopUp = !state.isOpenLoginPopUp;
      }
    },
    toggleAddToCart: (state, action) => {
      state.isOpenAddToCartPopUp = !state.isOpenAddToCartPopUp;
    },
    toggleForgotPassword: (state, action) => {
      if (action.payload === false) state.isOpenForgotPasswordPopUp = false;
      else state.isOpenForgotPasswordPopUp = !state.isOpenForgotPasswordPopUp;
    },
    toggleSignUp: (state, action) => {
      if (action.payload === false) state.isOpenSignUpPopUp = false;
      else state.isOpenSignUpPopUp = !state.isOpenSignUpPopUp;
    },
  },
});

export const { toggleLogin, toggleAddToCart, toggleForgotPassword, toggleSignUp } = popUpActions.actions;
export default popUpActions.reducer;
