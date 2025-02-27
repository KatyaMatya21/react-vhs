import {RestaurantDishesPage} from "../../../../pages/RestaurantDishesPage.jsx"

export const generateStaticParams = async () => {
  return [{ restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" }, { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },];
};

export default RestaurantDishesPage;
