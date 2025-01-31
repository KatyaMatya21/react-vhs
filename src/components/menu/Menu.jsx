import { Dish } from "../dish/Dish.jsx";
import styles from "./menu.module.less";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Menu</h3>
      <div className={styles.list}>
        {menu.map((position) => (
          <Dish key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
};
