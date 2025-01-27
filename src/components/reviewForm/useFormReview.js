import { useReducer } from "react";
import {
  INITIAL_VALUE,
  reducer,
  SET_CLEAR_ACTION,
  SET_NAME_ACTION,
  SET_RATING_DECREMENT_ACTION,
  SET_RATING_INCREMENT_ACTION,
  SET_TEXT_ACTION
} from "./reducer.js";

export const useFormReview = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const setName = (value) => dispatch({ type: SET_NAME_ACTION, payload: value });
  const setText = (value) => dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRatingDecrement = () => dispatch({ type: SET_RATING_DECREMENT_ACTION });
  const setRatingIncrement = () => dispatch({ type: SET_RATING_INCREMENT_ACTION });
  const setClear = () => dispatch({ type: SET_CLEAR_ACTION });

  return {
    form,
    setName,
    setText,
    setRatingDecrement,
    setRatingIncrement,
    setClear
  };
};
