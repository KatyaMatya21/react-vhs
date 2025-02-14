import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED
} from "../../constants.js";
import { getReviews } from "./getReviews.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({
    getReviewsRequestStatus: REQUEST_STATUS_IDLE,
  }),
  selectors: {
    selectGetReviewsRequestStatus: (state) => state.getReviewsRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.getReviewsRequestStatus = REQUEST_STATUS_PENDING;
      })
      .addCase(getReviews.rejected, (state) => {
        state.getReviewsRequestStatus = REQUEST_STATUS_REJECTED;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.getReviewsRequestStatus = REQUEST_STATUS_FULFILLED;
      }),
});


const selectReviewsSlice = (state) => state.reviews;

export const {
  selectById: selectReviewById,
  selectIds: selectReviewsIds,
} = entityAdapter.getSelectors(selectReviewsSlice);

export const { selectGetReviewsRequestStatus } = reviewsSlice.selectors;


