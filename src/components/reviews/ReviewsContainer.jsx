import { useDispatch, useSelector } from "react-redux";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";
import { use, useEffect } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { Reviews } from "./Reviews.jsx";
import { selectGetReviewsRequestStatus, selectReviewsIds } from "../../redux/entities/reviews/slice.js";
import { getReviews } from "../../redux/entities/reviews/getReviews.js";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { getUsers } from "../../redux/entities/users/getUsers.js";
import { selectGetUsersRequestStatus } from "../../redux/entities/users/slice.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";

export const ReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const requestStatusReviews = useSelector(selectGetReviewsRequestStatus);
  const requestStatusUsers = useSelector(selectGetUsersRequestStatus);
  const reviewsIds = useSelector(selectReviewsIds);

  useEffect(() => {
    dispatch(getReviews(restaurantId));
    dispatch(getUsers());
  }, [restaurantId, dispatch]);

  if (requestStatusReviews === REQUEST_STATUS_PENDING || requestStatusReviews === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading reviews..." />;
  }

  if (requestStatusReviews === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (requestStatusUsers === REQUEST_STATUS_PENDING || requestStatusReviews === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading users..." />;
  }

  if (requestStatusUsers === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  const { loggedIn } = use(AuthContext);

  return (
    <>
      <Reviews reviewsIds={reviewsIds} />
      {loggedIn && <ReviewForm />}
    </>
  );
};
