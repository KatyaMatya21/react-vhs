const INITIAL_VALUE = {
  name: "",
  text: "",
  rating: 0
};

const SET_NAME_ACTION = "SET_NAME";
const SET_TEXT_ACTION = "SET_TEXT";
const SET_RATING_DECREMENT_ACTION = "SET_RATING_DECREMENT_ACTION";
const SET_RATING_INCREMENT_ACTION = "SET_RATING_INCREMENT_ACTION";
const SET_CLEAR_ACTION = "SET_CLEAR_ACTION";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return {
        ...state,
        name: payload,
      };
    case SET_TEXT_ACTION:
      return {
        ...state,
        text: payload,
      };
    case SET_RATING_DECREMENT_ACTION:
      return {
        ...state,
        rating: state.rating === 0 ? 0 : state.rating - 1,
      };
    case SET_RATING_INCREMENT_ACTION:
      return {
        ...state,
        rating: state.rating === 5 ? 5 : state.rating + 1,
      };
    case SET_CLEAR_ACTION:
      return {
        ...INITIAL_VALUE
      };
    default:
      return state;
  }
};

export {
  reducer,
  INITIAL_VALUE,
  SET_NAME_ACTION,
  SET_TEXT_ACTION,
  SET_RATING_INCREMENT_ACTION,
  SET_RATING_DECREMENT_ACTION,
  SET_CLEAR_ACTION,
}
