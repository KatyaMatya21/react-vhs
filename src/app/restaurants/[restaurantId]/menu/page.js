"use client";
import {useParams} from "next/navigation";
import {MenuContainer} from "../../../../components/menu/MenuContainer.jsx";

const MenuPage = () => {
  const { restaurantId } = useParams();

  return <MenuContainer restaurantId={restaurantId} />;
};

export default MenuPage;
