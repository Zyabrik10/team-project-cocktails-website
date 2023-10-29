import { NavLink } from 'react-router-dom';

import globalCss from '../../../../css/global.module.css';
import css from './Navigation.module.css';


export const Navigation = () => {
    return (
        <nav className={css.nav}>
            <NavLink to="/drinks" className={`${css["navLink"]} ${globalCss["global-link"]}`}>Drinks</NavLink>
            <NavLink to="/add-drink" className={`${css["navLink"]} ${globalCss["global-link"]}`}>Add drink</NavLink>
            <NavLink to="/my-drinks" className={`${css["navLink"]} ${globalCss["global-link"]}`}>My drinks</NavLink>
            <NavLink to="/favorites" className={`${css["navLink"]} ${globalCss["global-link"]}`}>Favorites drinks</NavLink>
        </nav>      
    )
}