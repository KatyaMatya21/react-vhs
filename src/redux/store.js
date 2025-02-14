import { configureStore } from "@reduxjs/toolkit";
import { restaurantsSlice } from "./entities/restaurants/slice";
import { dishesSlice } from "./entities/dishes/slice.js";
import { reviewsSlice } from "./entities/reviews/slice.js";
import { usersSlice } from "./entities/users/slice.js";
import { cartSlice } from "./entities/cart/slice";
import { currentRestaurantSlice } from "./entities/currentRestaurant/slice.js";
import {currentDishSlice} from "./entities/currentDish/slice.js";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [currentRestaurantSlice.name]: currentRestaurantSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [currentDishSlice.name]: currentDishSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  }
});
