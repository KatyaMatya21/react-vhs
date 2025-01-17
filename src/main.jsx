import { createRoot } from "react-dom/client";
import { restaurants } from "./mock.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);

reactRoot.render(
  <ul style={ { listStyle: "none" } } className='restaurants'>
    {restaurants.map((item) => (
      <li className='restaurant' key={item.id}>

        {/* restaurant title */}
        <h2 className='main-title'>{item.name}</h2>

        {/* menu */}
        <h3 className='title'>Menu</h3>
        <ul className='list'>
          {item.menu.map((position) => (
            <li className='list__item' key={position.id}>
              {position.name} — {position.price}
              <ul style={ { display: "flex", listStyle: "none" } }>
                {position.ingredients.map((ingredient) => (
                  <li style={ { marginRight: "10px", color: "#cccccc" } } key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* reviews */}
        <h3 className='title'>Reviews</h3>
        <ul className='list'>
          {item.reviews.map((review) => (
            <li className='list__item' key={review.id}>
              <span style={ { textDecoration: "underline" } }>{review.user}</span> : {review.text}
            </li>
          ))}
        </ul>

      </li>
    ))}
  </ul>
);
