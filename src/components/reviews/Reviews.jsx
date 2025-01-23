import { Review } from "../review/Review.jsx";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3 className='title'>Reviews</h3>
      <div className='list' style={{marginBottom:"20px"}}>
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};
