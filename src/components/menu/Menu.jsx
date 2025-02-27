import styles from "./Menu.module.scss";
import {DishContainer} from "../dish/DishContainer.jsx";

export const Menu = ({ dishes }) => {
  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Menu</h3>
      <div className={styles.list}>
        {dishes.map((dish) => (
          <DishContainer key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};
