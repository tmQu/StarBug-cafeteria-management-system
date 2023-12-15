import { createSlice } from "@reduxjs/toolkit";

export const popUpActions = createSlice({
  name: "popUpActions",
  initialState: {
    isOpenLoginPopUp: false,
    isOpenAddToCartPopUp: false,
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
  },
});

export const { toggleLogin, toggleAddToCart } = popUpActions.actions;
export default popUpActions.reducer;
