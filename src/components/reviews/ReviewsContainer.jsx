import { ReviewForm } from "../reviewForm/ReviewForm.jsx";
import { use, useCallback } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { Reviews } from "./Reviews.jsx";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery
} from "../../redux/services/api/api.js";

export const ReviewsContainer = ({ restaurantId }) => {
  const { data: dataReviews, isLoading: isLoadingReviews, isError: isErrorReviews } = useGetReviewsByRestaurantIdQuery(restaurantId);
  const { data: dataUsers, isLoading: isLoadingUsers, isError: isErrorUsers } = useGetUsersQuery();

  const [addReview, { isLoading }] = useAddReviewMutation();

  const { loggedIn } = use(AuthContext);

  const handleAddReview = useCallback(
    (review) => {
      addReview({
        restaurantId,
        review: {
          ...review,
          userId: loggedIn.userId,
        },
      });
    },
    [addReview, restaurantId, loggedIn.userId]
  );


  if (isLoadingReviews || isLoadingUsers) {
    return <Loader text="Loading restaurants..." />;
  }

  if (isErrorReviews || isErrorUsers) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!dataReviews?.length || !dataUsers?.length) {
    return null;
  }

  const reviewsIds = dataReviews.map((item) => item.id);

  return (
    <>
      <Reviews reviewsIds={reviewsIds} restaurantId={restaurantId} />
      {loggedIn.isLogged && <ReviewForm onSubmit={handleAddReview} disableSubmit={isLoading} />}
    </>
  );
};
