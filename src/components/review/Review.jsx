import { IconStar } from "../icons/IconStar.jsx";
import styles from "./Review.module.scss";

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
