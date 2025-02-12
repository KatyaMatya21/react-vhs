import classNames from "classnames";
import styles from "./RestaurantTabsButton.module.less";

export const RestaurantTabsButton = ({ active, name }) => {
  return (
    <button
      type={"button"}
      className={classNames(styles.button, active && styles.buttonActive)}
    >
      {name}
    </button>
  );
};
