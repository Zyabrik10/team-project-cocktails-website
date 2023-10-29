import css from './FormInput.module.css';

export default function FormInput({ type = 'text', placeholder, children }) {
  return (
    <div className='form-input-box'>
          <input className={css['form-input']} type={type} placeholder={placeholder} />
          {children}
    </div>
  );
}
