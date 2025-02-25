import styles from "./Reviews.module.scss";
import { ReviewContainer } from "../review/ReviewContainer.jsx";

export const Reviews = ({ reviewsIds, restaurantId }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Reviews</h3>
      <div className={styles.list}>
        {reviewsIds.map((id) => (
          <ReviewContainer key={id} id={id} restaurantId={restaurantId} />
        ))}
      </div>
    </div>
  );
};
