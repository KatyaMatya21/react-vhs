import classNames from "classnames";
import styles from "./restaurantTabsButton.module.less";

export const RestaurantTabsButton = ({ active, onRestaurantChange, restaurant }) => {
  const { id, name } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <button
      type={"button"}
      onClick={() => onRestaurantChange(id)}

      className={classNames(styles.button, active && styles.buttonActive)}
    >
      {name}
    </button>
  );
};
