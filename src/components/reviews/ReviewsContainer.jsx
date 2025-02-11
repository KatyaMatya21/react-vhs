import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";
import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import {Reviews} from "./Reviews.jsx";

export const ReviewsContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  const { reviews } = restaurant || {};
  const { loggedIn } = use(AuthContext);

  return (
    <>
      <Reviews reviewsIds={reviews} />
      {loggedIn && <ReviewForm />}
    </>
  );
};
