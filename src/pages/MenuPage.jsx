import { useParams } from "react-router";
import { MenuContainer } from "../components/menu/MenuContainer.jsx";

export const MenuPage = () => {
  const { restaurantId } = useParams();

  return <MenuContainer restaurantId={restaurantId} />;
};
