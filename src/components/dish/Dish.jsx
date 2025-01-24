import { DishCounter } from "../dishCounter/DishCounter";

export const Dish = ({ position }) => {
  const { name, price, ingredients } = position;

  return (
    <div className='list__item' style={{marginBottom: "20px"}}>
      {name} — {price}
      <ul style={{display: "flex", listStyle: "none", padding: "0", margin:"0"}}>
        {ingredients.map((ingredient) => (
          <li style={{marginRight: "10px", color: "#cccccc"}} key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
      <DishCounter/>
    </div>
  );
};
