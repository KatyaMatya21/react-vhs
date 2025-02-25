"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api"}),
  tagTypes: ["reviews", "users"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getRestaurantById: builder.query({
      query: (id) => `/restaurant/${id}`,
    }),
    getDishesByRestaurantId: builder.query({
      query: (id) => `/dishes?restaurantId=${id}`
    }),
    getDishById: builder.query({
      query: (id) => `/dish/${id}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (id) => `/reviews?restaurantId=${id}`,
      providesTags: [{ type: "reviews", id: "ALL" }],
    }),
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: [{ type: "users", id: "ALL" }],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: [{ type: "reviews", id: "ALL" }],
    }),
  })
});

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  useGetDishesByRestaurantIdQuery,
  useGetDishByIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useAddReviewMutation,
} = apiSlice;
