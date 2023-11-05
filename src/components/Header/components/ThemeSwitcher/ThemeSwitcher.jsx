import css from './ThemeSwitcher.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';
import { changeTheme } from 'redux/theme/themeSlise';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getThemeColor);

  const handleToggleTheme = () => {
    dispatch(changeTheme(theme === 'dark' ? 'ligth' : 'dark'));
  };

  return (
    <div className={css.switchContainer}>
      <label htmlFor="themeSwitch" className={css.switch}>
        <input
          className={`${css['switchInput']}`}
          type="checkbox"
          id="themeSwitch"
          checked={theme === 'ligth'}
          onChange={handleToggleTheme}
        />
        <span className={css.switchSlider}></span>
      </label>
    </div>
  );
};
