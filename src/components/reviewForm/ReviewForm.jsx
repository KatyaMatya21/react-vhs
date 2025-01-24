import { useReducer } from "react";
import { Counter } from "../counter/Counter";
import { FormGroup } from "../formGroup/FormGroup.jsx";
import './ReviewForm.css';
import {
  reducer,
  INITIAL_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_CLEAR_ACTION,
  SET_RATING_DECREMENT_ACTION,
  SET_RATING_INCREMENT_ACTION
} from "./reducer.js"

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const { name, text, rating } = form;

  const setName = (value) => dispatch({ type: SET_NAME_ACTION, payload: value });
  const setText = (value) => dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRatingDecrement = () => dispatch({ type: SET_RATING_DECREMENT_ACTION });
  const setRatingIncrement = () => dispatch({ type: SET_RATING_INCREMENT_ACTION });
  const setClear = () => dispatch({ type: SET_CLEAR_ACTION });

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
