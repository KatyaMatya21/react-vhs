import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCurrentDish = createAsyncThunk(
  "dish/getCurrentDish",
  async (id, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/dish/" + id, {});
    const result = await response.json();

    if (!result) {
      return rejectWithValue("no data");
    }

    return result;
  }
);
