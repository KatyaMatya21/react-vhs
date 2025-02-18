import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../restaurants/slice.js";
import { selectDishById } from "./slice.js";

export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dishes?restaurantId=" + id, {});
    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      const restaurantMenu = selectRestaurantById(getState(), id).menu;
      let isDishMissing = false;

      restaurantMenu.map((dishId) => {
        const dish = selectDishById(getState(), dishId);
        if (!dish) {
          isDishMissing = true;
        }
      });

      return isDishMissing;
    },
  }
);
