"use client";
import {ReviewForm} from "../reviewForm/ReviewForm.jsx";
import {use, useCallback, useOptimistic} from "react";
import {UserAuthContext} from "../authContext/UserAuthContext.js";
import {Reviews} from "./Reviews.jsx";
import {usePathname} from "next/navigation";
import {addReviewAction} from "../../app/actions/addReviewAction.js";

export const ReviewsContainer = ({ restaurantId, reviews }) => {
  const { loggedIn } = use(UserAuthContext);

  const pathname = usePathname();

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (currentState, optimisticValue) => [
      ...currentState,
      {
        ...optimisticValue
      }
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          text: "",
          rating: 5,
        };
      }

      const text = formData.get("text");
      const rating = formData.get("rating");
      const review = { id: crypto.randomUUID(), text, rating, userId: loggedIn.userId };

      addOptimisticReview(review);
      await addReviewAction({ restaurantId, pathname, review });

      return {
        text: "",
        rating: 5,
      };
    },
    [addOptimisticReview, restaurantId, pathname, loggedIn.userId]
  );

  if (!optimisticReviews.length) {
    return null;
  }

  return (
    <>
      <Reviews reviews={optimisticReviews} restaurantId={restaurantId} />
      {loggedIn.isLogged && <ReviewForm onSubmit={handleAddReview} />}
    </>
  );
};
