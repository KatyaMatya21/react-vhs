import { DishCounter } from "../dishCounter/DishCounter";
import styles from "./dish.module.less";

export const Dish = ({ position }) => {
  const { name, price, ingredients } = position;

  return (
    <div className={styles.dish}>
      <h4 className={styles.title}>{name} <span className={styles.price}>{price} €</span></h4>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <li className={styles.ingredient} key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      <DishCounter/>
    </div>
  );
};
