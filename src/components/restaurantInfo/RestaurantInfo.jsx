import styles from "./RestaurantInfo.module.scss";
import { RestaurantNav } from "../restaurantNav/RestaurantNav.jsx";

export const RestaurantInfo = ({ restaurant, children }) => {
  const { name, description, img, id } = restaurant || {};

  return (
    <>
      <div className={styles.head}>
        <div className={styles.left}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.right}>
          <img src={img} alt={name}/>
        </div>
      </div>
      <RestaurantNav restaurantId={id}/>
      {children}
    </>
  );
};
