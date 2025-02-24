"use client";
import {useParams} from "next/navigation";
import {ReviewsContainer} from "../../../../components/reviews/ReviewsContainer.jsx";

const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer restaurantId={restaurantId} />;
};

export default ReviewsPage;
