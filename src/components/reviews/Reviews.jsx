import styles from "./reviews.module.less";
import { ReviewContainer } from "../review/ReviewContainer.jsx";

export const Reviews = ({ reviewsIds }) => {
  return (
    <div className={styles.reviews}>
      <h3 className={styles.title}>Reviews</h3>
      <div className={styles.list}>
        {reviewsIds.map((id) => (
          <ReviewContainer key={id} id={id} />
        ))}
      </div>
    </div>
  );
};
