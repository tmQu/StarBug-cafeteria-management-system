import { configureStore } from "@reduxjs/toolkit";
import cartActionsReducer from "./reduxActions/cart";

export default configureStore({
  reducer: {
    cartReducer: cartActionsReducer,
  },
});
