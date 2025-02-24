"use client";
import { Review } from "./Review.jsx";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery
} from "../../redux/services/api/api.js";
import { Loader } from "../loader/Loader.jsx";

export const ReviewContainer = ({ id, restaurantId }) => {
  const { review, isLoading: reviewLoading } = useGetReviewsByRestaurantIdQuery(restaurantId, {
    selectFromResult: ({ data }) => ({
      review: data?.find((review) => review.id === id),
    }),
  });

  const { user, isLoading: userLoading } = useGetUsersQuery(undefined, {
    skip: !review?.userId,
    selectFromResult: ({ data }) => ({
      user: data?.find((user) => user.id === review?.userId),
    }),
  });

  if (reviewLoading || userLoading) return <Loader text="Loading review..." />;

  const { text, rating } = review || {};
  const { name } = user || {};

  return (
    <Review name={name} rating={rating} text={text} />
  );
};
