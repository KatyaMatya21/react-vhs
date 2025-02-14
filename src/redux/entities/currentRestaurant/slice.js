import { createSlice } from "@reduxjs/toolkit";
import { getCurrentRestaurant } from "./getCurrentRestaurant.js";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from "../../constants.js";

export const currentRestaurantSlice = createSlice({
  name: "currentRestaurant",
  initialState: {
    getCurrentRestaurantRequestStatus: REQUEST_STATUS_IDLE,
  },
  selectors: {
    selectCurrentRestaurantId: (state) => state.id,
    selectCurrentRestaurant: (state) => state,
    selectGetCurrentRestaurantsRequestStatus: (state) => state.getCurrentRestaurantRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCurrentRestaurant.pending, (state) => {
        state.getCurrentRestaurantRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getCurrentRestaurant.rejected, (state) => {
        state.getCurrentRestaurantRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getCurrentRestaurant.fulfilled, (state, { payload }) => {
        return {
          ...payload,
          getCurrentRestaurantRequestStatus: REQUEST_STATUS_FULFILLED
        }
      }),
});

export const { selectGetCurrentRestaurantsRequestStatus, selectCurrentRestaurant, selectCurrentRestaurantId } = currentRestaurantSlice.selectors;
