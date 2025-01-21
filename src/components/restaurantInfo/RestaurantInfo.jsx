import { Counter } from "../counter/Counter";

export const RestaurantInfo = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  if (!name) {
    return null;
  }

  return (
    <div className='restaurant'>

      {/* restaurant title */}
      <h2 className='main-title'>{name}</h2>

      {/* menu */}
      {Boolean(menu.length) && (
        <>
          <h3 className='title'>Menu</h3>
          <ul className='list'>
            {menu.map((position) => (
              <li className='list__item' key={position.id} style={{marginBottom: "20px"}}>
                {position.name} — {position.price}
                <ul style={{display: "flex", listStyle: "none", padding:"0"}} >
                  {position.ingredients.map((ingredient) => (
                    <li style={{marginRight: "10px", color: "#cccccc"}} key={ingredient}>
                      {ingredient}
                    </li>
                  ))}
                </ul>
                <Counter/>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* reviews */}
      {Boolean(reviews.length) && (
        <>
          <h3 className='title'>Reviews</h3>
          <ul className='list'>
            {reviews.map((review) => (
              <li className='list__item' key={review.id}>
              <span style={{textDecoration: "underline"}}>{review.user}</span> : {review.text}
              </li>
            ))}
          </ul>
        </>
      )}

    </div>
  );
};
