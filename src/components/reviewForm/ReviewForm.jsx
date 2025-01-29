import { useFormReview } from "./useFormReview.js";
import { Counter } from "../counter/Counter";
import { FormGroup } from "../formGroup/FormGroup.jsx";
import styles from "./reviewForm.module.less";

export const ReviewForm = () => {
  const { form, setName, setText, setRatingDecrement, setRatingIncrement, setClear } = useFormReview();
  const { name, text, rating } = form;

  return (
    <form className={styles.form}>

      <h3 className={styles.title}>Add review</h3>

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

      <div className={styles.buttonGroup}>
        <button className={styles.button} type="button">Send</button>
        <button
          onClick={setClear}
          className={styles.button}
          type="button"
        >Clear form</button>
      </div>

    </form>
);
};
