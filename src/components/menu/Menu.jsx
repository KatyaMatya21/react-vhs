import styles from "./Menu.module.less";
import { DishContainer } from "../dish/DishContainer.jsx";

export const Menu = ({ menuIds }) => {
  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Menu</h3>
      <div className={styles.list}>
        {menuIds.map((id) => (
          <DishContainer key={id} dishId={id} />
        ))}
      </div>
    </div>
  );
};
