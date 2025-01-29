import { Menu } from "../menu/Menu.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";
import styles from "./restaurantInfo.module.less";

export const RestaurantInfo = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className={styles.title}>{name}</h2>
        {Boolean(menu.length) && <Menu menu={menu} />}
        {Boolean(reviews.length) && <Reviews reviews={reviews} />}
        <ReviewForm />
    </>
  );
};
