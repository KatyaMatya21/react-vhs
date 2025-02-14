import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from "../../constants.js";
import { getDishes } from "./getDishes.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({
    getDishesRequestStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetDishesRequestStatus: (state) => state.getDishesRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.getDishesRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getDishes.rejected, (state) => {
        state.getDishesRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.getDishesRequestStatus = REQUEST_STATUS_FULFILLED;
      }),
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectById: selectDishById,
  selectIds: selectDishesIds,
} = entityAdapter.getSelectors(selectDishesSlice);

export const { selectGetDishesRequestStatus } = dishesSlice.selectors;

