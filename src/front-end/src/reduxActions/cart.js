import { createSlice } from "@reduxjs/toolkit";
import {
  calTotalPrice,
  calTotalFee,
  calTotalVoucher,
  calculateToppingPrice,
} from "../utils/cartCalculate";

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
      const item = { ...action.payload };

      let addFlag = true;
      state.cartList.forEach((i) => {
        if (
          i.id === item.id &&
          i.size.sizePrice == item.size.sizePrice &&
          i.topping[0].quantity == item.topping[0].quantity &&
          i.topping[1].quantity == item.topping[1].quantity &&
          i.topping[2].quantity == item.topping[2].quantity
        ) {
          addFlag = false;
          i.quantity += item.quantity;
          state.counter += item.quantity;
          return;
        }
      });
      if (addFlag === true) {
        state.cartList.push(item);
        state.counter++;
      }

      state.totalPrice = calTotalPrice(state.cartList);
      state.totalFee = calTotalFee(state.cartList);
      state.totalVoucher = calTotalVoucher();
    },
    removeCart: (state, action) => {
      console.log(action.payload);

      state.cartList.map((item) => {
        console.log(
          item.id.toString() +
            item.size.sizePrice.toString() +
            calculateToppingPrice(item.topping).toString()
        );
      });

      state.cartList = state.cartList.filter(
        (item) =>
          item.id.toString() +
            item.size.size.toString() +
            (
              item.topping[0].name +
              item.topping[1].name +
              item.topping[2].name
            ).toString() !=
          action.payload
      );
      state.counter = state.cartList.length;

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
