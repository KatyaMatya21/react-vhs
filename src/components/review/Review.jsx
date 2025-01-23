export const Review = ({ review }) => {
  const { user, text, rating } = review;

  return (
    <div className='list__item'>
      <span style={{textDecoration: "underline"}}>{user}</span> : {rating} ☆ —  {text}
    </div>
  );
};
