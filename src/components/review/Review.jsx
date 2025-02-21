import { IconStar } from "../icons/IconStar.jsx";
import styles from "./Review.module.less";
import { Button } from "../button/Button.jsx";
import { IconPen } from "../icons/IconPen.jsx";

export const Review = ({ name, rating, text, showEdit, onEditClick }) => {
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

      {showEdit && <Button onClick={onEditClick} type="button" size="square"><IconPen /></Button>}
    </div>
);
};
