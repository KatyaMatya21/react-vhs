import { Menu } from "../menu/Menu.jsx";
import { Reviews } from "../reviews/Reviews.jsx";

export const RestaurantInfo = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div className='restaurant'>
      <h2 className='main-title'>{name}</h2>
      {Boolean(menu.length) && <Menu menu={menu} />}
      <Reviews reviews={reviews} />
    </div>
  );
};
