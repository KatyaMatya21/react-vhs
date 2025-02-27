'use client';
import {CartItemContainer} from "../cartItem/CartItemContainer.jsx";
import styles from "./Cart.module.scss";

export const Cart = ({ itemsIds, dishes }) => {
  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      <ul className={styles.list}>
        {itemsIds.map((id) => (
          <li className={styles.item} key={id}>
            <CartItemContainer id={id} dishes={dishes} />
          </li>
        ))}
      </ul>
    </div>
  );
};
