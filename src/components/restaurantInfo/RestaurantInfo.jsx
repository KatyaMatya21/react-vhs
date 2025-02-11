import { Menu } from "../menu/Menu.jsx";
import { Reviews } from "../reviews/Reviews.jsx";
import { ReviewForm } from "../reviewForm/ReviewForm.jsx";

import styles from "./restaurantInfo.module.less";

import { use } from "react";
import { AuthContext } from "../authContext/AuthContext.js";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

export const RestaurantInfo = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  const { name, menu, reviews } = restaurant || {};

  const { loggedIn } = use(AuthContext);

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className={styles.title}>{name}</h2>
      {Boolean(menu.length) && <Menu menuIds={menu} />}
      {Boolean(reviews.length) && <Reviews reviewsIds={reviews} />}
      {loggedIn && <ReviewForm />}
    </>
  );
};
