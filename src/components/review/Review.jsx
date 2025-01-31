import { IconStar } from "../iconStar/IconStar.jsx";
import styles from "./review.module.less";

export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div className={styles.review}>
      <div className={styles.user}>
        {user}
        <span className={styles.rating}>
          {Array.from({ length: rating }, (_, i) => (
            <IconStar key={i} />
          ))}
        </span>
      </div>
      <div>{text}</div>
    </div>
);
};
