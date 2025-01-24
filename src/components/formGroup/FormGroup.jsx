export const FormGroup = ({ title, value, onChange, type }) => {
  return (
    <div className="form-group">
      <label>{title}</label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type={type}
      />
    </div>
  );
};
