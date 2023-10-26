import globalCss from '../../css/global.module.css';
import css from './Button.module.css';

export const Button = ({ children, style, onClick }) => {
  return (
    <button
      className={`${globalCss['global-button']} ${css['button']}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
