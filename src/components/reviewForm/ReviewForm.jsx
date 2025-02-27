import {FormGroup} from "../formGroup/FormGroup.jsx";
import {CustomButton} from "../button/CustomButton.jsx";
import {useActionState, useRef} from "react";
import {IconMinus} from "../icons/IconMinus.jsx";
import {IconPlus} from "../icons/IconPlus.jsx";
import styles from "./ReviewForm.module.scss";

export const ReviewForm = ({ onSubmit }) => {
  const ratingRef = useRef();

  const [formState, submitAction, isPending] = useActionState(
    onSubmit,
    {
      text: "",
      rating: 5,
    }
  );

  return (
    <form className={styles.form} action={submitAction}>

      <h3 className={styles.title}>Add review</h3>

      <FormGroup
        title="Text"
        defaultValue={formState.text}
        type="text"
        name="text"
      />

      <div className={styles.formCounter}>
        <CustomButton onClick={() => ratingRef.current.stepDown()} type="button" size="square" id='decrement-button'>
          <IconMinus />
        </CustomButton>
        <input
          className={styles.formCounterValue}
          type='number'
          id='rating'
          name='rating'
          min={1}
          max={5}
          ref={ratingRef}
          defaultValue={formState.rating}
        />
        <CustomButton onClick={() => ratingRef.current.stepUp()} type="button" size="square">
          <IconPlus />
        </CustomButton>
      </div>

      <div className={styles.buttonGroup}>
        <CustomButton type={"submit"} disabled={isPending}>Send</CustomButton>
        <CustomButton type={"submit"} formAction={() => submitAction(null)}>Clear form</CustomButton>
      </div>

    </form>
  );
};
