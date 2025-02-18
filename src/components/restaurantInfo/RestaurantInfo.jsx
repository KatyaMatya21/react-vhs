import styles from "./RestaurantInfo.module.less";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { RestaurantNav } from "../restaurantNav/RestaurantNav.jsx";
import { useEffect } from "react";
import { REQUEST_STATUS_IDLE, REQUEST_STATUS_PENDING, REQUEST_STATUS_REJECTED } from "../../redux/constants.js";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { getRestaurantById } from "../../redux/entities/restaurants/getRestaurantById.js";
import { selectGetRestaurantByIdRequestStatus, selectRestaurantById } from "../../redux/entities/restaurants/slice.js";

export const RestaurantInfo = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const requestStatus = useSelector(selectGetRestaurantByIdRequestStatus);
  const restaurant = useSelector( (state) => selectRestaurantById(state, restaurantId));

  useEffect(() => {
    dispatch(getRestaurantById(restaurantId));
  }, [restaurantId, dispatch]);

  if (requestStatus === REQUEST_STATUS_PENDING || requestStatus === REQUEST_STATUS_IDLE) {
    return <Loader text="Loading restaurant..." />;
  }

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <ErrorBlock text="Error with data"/>;
  }

  const { name, description, img } = restaurant || {};

  if (!name) {
    return null;
  }

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
      <RestaurantNav restaurantId={restaurantId}/>
      <Outlet />
    </>
  );
};
