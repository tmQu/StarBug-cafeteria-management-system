import { configureStore } from "@reduxjs/toolkit";
import cartActionsReducer from "./reduxActions/cart";
import popUpActionsReducer from "./reduxActions/popUp";

export default configureStore({
  reducer: {
    popUpReducer: popUpActionsReducer,
    cartReducer: cartActionsReducer,
  },
});
