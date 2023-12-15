import { createSlice } from "@reduxjs/toolkit";

export const popUpActions = createSlice({
  name: "popUpActions",
  initialState: {
    isOpenLoginPopUp: false,
    isOpenAddToCartPopUp: false,
  },
  reducers: {
    toggleLogin: (state, action) => {
      state.isOpenLoginPopUp = !state.isOpenLoginPopUp;
      if (action.payload === false) state.isOpenLoginPopUp = false;
    },
    toggleAddToCart: (state, action) => {
      state.isOpenAddToCartPopUp = !state.isOpenAddToCartPopUp;
    },
  },
});

export const { toggleLogin, toggleAddToCart } = popUpActions.actions;
export default popUpActions.reducer;
