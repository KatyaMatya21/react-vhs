import {ReviewsContainer} from "../../../../components/reviews/ReviewsContainer.jsx";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <ReviewsContainer restaurantId={restaurantId} />;
};

export default ReviewsPage;
