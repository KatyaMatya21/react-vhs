import { useParams } from "react-router";
import { ReviewsContainer } from "../components/reviews/ReviewsContainer.jsx";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};
