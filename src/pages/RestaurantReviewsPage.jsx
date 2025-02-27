import {getReviewsByRestaurantId} from "../services/getReviewsByRestaurantId.js";
import {getUsers} from "../services/getUsers.js";
import {UsersContextProvider} from "../components/usersContextProvider/UsersContextProvider.jsx";
import {ReviewsContainer} from "../components/reviews/ReviewsContainer.jsx";

const RestaurantReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;

  const reviewsData = getReviewsByRestaurantId(restaurantId);
  const usersData = getUsers();

  const [reviews, users] = await Promise.all([reviewsData, usersData]);

  return (
    <UsersContextProvider users={users}>
      <ReviewsContainer restaurantId={restaurantId} reviews={reviews} />
    </UsersContextProvider>
  );
};

export default RestaurantReviewsPage;
