import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./entities/cart/slice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer
  }
});
