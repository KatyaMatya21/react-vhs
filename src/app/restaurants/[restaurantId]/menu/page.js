import {MenuContainer} from "../../../../components/menu/MenuContainer.jsx";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;

  return <MenuContainer restaurantId={restaurantId} />;
};

export default MenuPage;
