import { createSlice } from "@reduxjs/toolkit";

export const cartActions = createSlice({
  name: "cartActions",
  initialState: {
    counter: 0,
    cartList: [],
  },
  reducers: {
    addCart: (state, action) => {
      action.payload.quantity = 1;
      let addFlag = true;
      state.cartList.forEach((item) => {
        if (item.id === action.payload.id) {
          addFlag = false;
          item.quantity++;
          return;
        }
      });
      if (addFlag === true) {
        state.cartList.push(action.payload);
      }
      state.counter++;
    },
    removeCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.counter--;
    },
    removeAllCart: (state, action) => {
      state.cartList = [];
      state.counter = 0;
    },
  },
});

export const { addCart, removeCart, removeAllCart } = cartActions.actions;
export default cartActions.reducer;
