import css from './Form.module.css';
import globalCss from '../../css/global.module.css';
import { Link } from 'react-router-dom';

export default function Form({
  children,
  title,
  buttonTitle,
  buttonOnClick,
  linkTo,
  linkTitle,
}) {
  return (
    <form className={css['form']}>
      <p className={`${css['title']} ${globalCss['global-p']}`}>{title}</p>
      <div className={css['form-input-container']}>{children}</div>
      <button
        onClick={buttonOnClick}
        className={`${css['form-submit-button']} ${globalCss['custom-button']} ${globalCss['global-button']}`}
      >
        {buttonTitle}
      </button>
      <Link
        className={`${css['link-to']} ${globalCss['global-link']}`}
        to={linkTo}
      >
        {linkTitle}
      </Link>
    </form>
  );
}
