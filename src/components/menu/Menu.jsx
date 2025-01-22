import { Dish } from "../dish/Dish.jsx";

export const Menu = ({ menu }) => {
  return (
    <>
      <h3 className='title'>Menu</h3>
      <div className='list' style={{marginBottom:"20px"}}>
        {menu.map((position) => (
          <Dish key={position.id} position={position} />
        ))}
      </div>
    </>
  );
};
