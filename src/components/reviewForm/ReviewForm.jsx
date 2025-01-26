import { useFormReview } from "./useFormReview.js";
import { Counter } from "../counter/Counter";
import { FormGroup } from "../formGroup/FormGroup.jsx";
import './ReviewForm.css';

export const ReviewForm = () => {
  const { form, setName, setText, setRatingDecrement, setRatingIncrement, setClear } = useFormReview();
  const { name, text, rating } = form;

  return (
    <form className='form'>

      <h3>Add review</h3>

      <FormGroup
        title="Name"
        value={name}
        type="text"
        onChange={setName} />

      <FormGroup
        title="Text"
        value={text}
        type="text"
        onChange={setText} />

      <Counter
        count={rating}
        onDecrement={setRatingDecrement}
        onIncrement={setRatingIncrement}
      />

      <div className="button-group">
        <button className='button' type="button">Send</button>
        <button
          onClick={setClear}
          className='button'
          type="button"
        >Clear form</button>
      </div>

    </form>
);
};
