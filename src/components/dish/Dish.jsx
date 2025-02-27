import {DishCounter} from "../dishCounter/DishCounter";
import styles from "./Dish.module.scss";
import Link from "next/link";

export const Dish = ({ dishId, name, price, ingredients, showCounter }) => {
  return (
    <div className={styles.dish}>
      <h4 className={styles.title}>
        <Link href={`/dish/${dishId}`}>{name}</Link>
        <span className={styles.price}>{price} €</span>
      </h4>
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient) => (
          <li className={styles.ingredient} key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      {showCounter && <DishCounter dishId={dishId} />}
    </div>
  );
};
