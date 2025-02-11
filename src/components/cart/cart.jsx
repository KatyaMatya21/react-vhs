import { CartItemContainer } from "../cartItem/cartItemContainer.jsx";
import styles from "./cart.module.less";

export const Cart = ({ itemsIds }) => {
  return (
    <div className={styles.cart}>
      <h3 className={styles.title}>Cart</h3>
      <ul className={styles.list}>
        {itemsIds.map((id) => (
          <li className={styles.item} key={id}>
            <CartItemContainer id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
