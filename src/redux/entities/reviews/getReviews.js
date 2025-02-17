import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants/slice.js";
import { selectReviewById } from "./slice.js";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/reviews?restaurantId=" + id, {});
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      const restaurantReviews = selectRestaurantById(getState(), id).reviews;
      let isReviewMissing = false;

      restaurantReviews.map((reviewId) => {
        const review = selectReviewById(getState(), reviewId);
        if (!review) {
          isReviewMissing = true;
        }
      });

      return isReviewMissing;
    },
  }

);
