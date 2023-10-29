import css from './FormInput.module.css';

export default function FormInput({
  type = 'text',
  placeholder,
  children,
  onChange,
  required,
  pattern
}) {
  return (
    <div className="form-input-box">
      <input
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
