import { createSlice } from "@reduxjs/toolkit";

const calTotalPrice = (cartList) => {
  let totalPrice = 0;

  cartList.forEach((item) => {
    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
  });

  return totalPrice;
};
const calTotalFee = (cartList) => {
  const ratio = 0.1;
  let totalFee = 0;

  cartList.forEach((item) => {
    const itemPrice = item.price * item.quantity * ratio;
    totalFee += itemPrice;
  });

  return totalFee;
};
const calTotalVoucher = () => {
  return 0.1;
};

export const cartActions = createSlice({
  name: "cartActions",
  initialState: {
    counter: 0,
    cartList: [],
    totalPrice: 0,
    totalFee: 0,
    totalVoucher: 0,
  },
  reducers: {
    addCart: (state, action) => {
      const item = { ...action.payload, quantity: 1 };
      // item = { id, name, price, rate, image, quantity };

      let addFlag = true;
      state.cartList.forEach((i) => {
        if (i.id === item.id) {
          addFlag = false;
          i.quantity++;
          return;
        }
      });
      if (addFlag === true) {
        state.cartList.push(item);
      }
      state.counter++;

      state.totalPrice = calTotalPrice(state.cartList);
      state.totalFee = calTotalFee(state.cartList);
      state.totalVoucher = calTotalVoucher();
    },
    removeCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.counter--;

      state.totalPrice = calTotalPrice(state.cartList);
      state.totalFee = calTotalFee(state.cartList);
      state.totalVoucher = calTotalVoucher();
    },
    removeAllCart: (state, action) => {
      state.cartList = [];
      state.counter = 0;

      state.totalPrice = 0;
      state.totalFee = 0;
      state.totalVoucher = 0;
    },
    increaseQuantity: (state, action) => {
      state.cartList.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity++;
          return;
        }
      });
      state.counter++;

      state.totalPrice = calTotalPrice(state.cartList);
      state.totalFee = calTotalFee(state.cartList);
      state.totalVoucher = calTotalVoucher();
    },
    decreaseQuantity: (state, action) => {
      state.cartList.forEach((item) => {
        if (item.id === action.payload) {
          item.quantity--;
          return;
        }
      });
      state.counter--;

      state.totalPrice = calTotalPrice(state.cartList);
      state.totalFee = calTotalFee(state.cartList);
      state.totalVoucher = calTotalVoucher();
    },
  },
});

export const { addCart, removeCart, removeAllCart } = cartActions.actions;
export default cartActions.reducer;
