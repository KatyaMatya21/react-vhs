import { useFormReview } from "./useFormReview.js";
import { Counter } from "../counter/Counter";
import { FormGroup } from "../formGroup/FormGroup.jsx";
import { CustomButton } from "../button/CustomButton.jsx";
import styles from "./ReviewForm.module.scss";

export const ReviewForm = ({ onSubmit, disableSubmit }) => {
  const { form, setText, setRatingDecrement, setRatingIncrement, setClear } = useFormReview();
  const { text, rating } = form;

  return (
    <form className={styles.form}>

      <h3 className={styles.title}>Add review</h3>

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
        <CustomButton
          onClick={() => onSubmit({ text, rating })}
          type={"button"}
          disabled={disableSubmit}
        >
          Send
        </CustomButton>

        <CustomButton type={"button"} onClick={setClear}>Clear form</CustomButton>
      </div>

    </form>
);
};
