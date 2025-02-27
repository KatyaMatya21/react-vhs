import styles from "./Reviews.module.scss";
import {ReviewContainer} from "../review/ReviewContainer.jsx";

export const Reviews = ({ reviews, restaurantId }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Reviews</h3>
      <div className={styles.list}>
        {reviews.map((review) => (
          <ReviewContainer key={review.id} review={review} restaurantId={restaurantId} />
        ))}
      </div>
    </div>
  );
};
