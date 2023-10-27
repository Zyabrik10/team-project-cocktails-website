import css from './ThemeSwitcher.module.css';


export const ThemeSwitcher = () => {

 return (
    <div className={css.switchContainer}>
        <label htmlFor="themeSwitch" className={css.switch}>
        <input
        className={css.switchInput}
            type="checkbox"
            id="themeSwitch"
        />
        <span className={css.switchSlider}></span>
        </label>
    </div>
 )
}