import styles from "./formGroup.module.less";

export const FormGroup = ({ title, value, onChange, type }) => {
  return (
    <div className={styles.formGroup}>
      <label>{title}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
      />
    </div>
  );
};
