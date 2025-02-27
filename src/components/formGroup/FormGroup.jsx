import styles from "./FormGroup.module.scss";

export const FormGroup = ({ title, defaultValue, type, name }) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        defaultValue={defaultValue}
        type={type}
        name={name}
      />
    </div>
  );
};
