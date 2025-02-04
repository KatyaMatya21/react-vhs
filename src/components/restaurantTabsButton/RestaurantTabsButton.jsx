import classNames from "classnames";
import styles from "./restaurantTabsButton.module.less";

export const RestaurantTabsButton = ({ active, onButtonClick, id, name }) => {
  return (
    <button
      type={"button"}
      onClick={() => onButtonClick(id)}
      className={classNames(styles.button, active && styles.buttonActive)}
    >
      {name}
    </button>
  );
};
