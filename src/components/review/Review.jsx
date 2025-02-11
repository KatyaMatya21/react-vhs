import { IconStar } from "../iconStar/IconStar.jsx";
import styles from "./Review.module.less";

export const Review = ({ name, rating, text }) => {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        {name}
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
