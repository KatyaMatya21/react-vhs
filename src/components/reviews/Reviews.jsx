import { Review } from "../review/Review.jsx";
import styles from "./reviews.module.less";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Reviews</h3>
      <div className={styles.list}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};
