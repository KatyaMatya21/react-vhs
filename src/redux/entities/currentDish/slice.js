import { createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from "../../constants.js";
import { getCurrentDish } from "./getCurrentDish.js";


export const currentDishSlice = createSlice({
  name: "currentDish",
  initialState: {
    getCurrentDishRequestStatus: REQUEST_STATUS_IDLE,
  },
  selectors: {
    selectCurrentDish: (state) => state,
    selectGetCurrentDishRequestStatus: (state) => state.getCurrentDishRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCurrentDish.pending, (state) => {
        state.getCurrentDishRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getCurrentDish.rejected, (state) => {
        state.getCurrentDishRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getCurrentDish.fulfilled, (state, { payload }) => {
        return {
          ...payload,
          getCurrentDishRequestStatus: REQUEST_STATUS_FULFILLED
        }
      }),
});

export const { selectGetCurrentDishRequestStatus, selectCurrentDish } = currentDishSlice.selectors;

