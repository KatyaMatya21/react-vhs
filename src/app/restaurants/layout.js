"use client";
import {Restaurants} from "../../components/restaurants/Restaurants.jsx";

const RestaurantsLayout = ({ children }) => {
  return (
    <Restaurants>
      { children }
    </Restaurants>
  );
};

export default RestaurantsLayout;
