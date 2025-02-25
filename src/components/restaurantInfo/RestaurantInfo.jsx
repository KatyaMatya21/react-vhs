"use client";
import styles from "./RestaurantInfo.module.scss";
import { RestaurantNav } from "../restaurantNav/RestaurantNav.jsx";
import { Loader } from "../loader/Loader.jsx";
import { ErrorBlock } from "../errorBlock/ErrorBlock.jsx";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api.js";

export const RestaurantInfo = ({ children, restaurantId }) => {
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return <Loader text="Loading restaurant..." />;
  }

  if (isError) {
    return <ErrorBlock text="Error with data"/>;
  }

  if (!data) {
    return null;
  }

  const { name, description, img } = data || {};

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

      {children}
    </>
  );
};
