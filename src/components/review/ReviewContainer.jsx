import { useSelector } from "react-redux";
import { selectReviewById } from "../redux/entities/reviews/slice.js";
import { selectUserById } from "../redux/entities/users/slice.js";
import { Review } from "./Review.jsx";

export const ReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const { userId, text, rating } = review || {};
  const user = useSelector((state) => selectUserById(state, userId));
  const { name } = user || {};

  return (
    <Review name={name} rating={rating} text={text} />
  );
};
