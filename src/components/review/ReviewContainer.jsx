import { Review } from "./Review.jsx";
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery
} from "../../redux/services/api/api.js";
import { Loader } from "../loader/Loader.jsx";
import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";

export const ReviewContainer = ({ id, restaurantId, setEditId }) => {

  const { loggedIn } = use(AuthContext);

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

  const { userId, text, rating } = review || {};
  const { name } = user || {};

  const showEdit = loggedIn.userId === userId;
  const onEditClick = () => {
    setEditId(id);
    console.log("edit time");
    // todo...
  }

  return (
    <Review name={name} rating={rating} text={text} showEdit={showEdit} onEditClick={onEditClick} />
  );
};
