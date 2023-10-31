import css from './FormInput.module.css';

export default function FormInput({
  type = 'text',
  placeholder,
  children,
  onChange,
  required,
  pattern,
  value
}) {
  return (
    <div className={css["form-input-box"]}>
      <input
        value={value}
        onChange={onChange}
        className={css['form-input']}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
      {children}
    </div>
  );
}
