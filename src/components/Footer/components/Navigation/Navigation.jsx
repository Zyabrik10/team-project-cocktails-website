import { NavLink } from 'react-router-dom';

import globalCss from '../../../../css/global.module.css';
import css from './Navigation.module.css';


export const Navigation = () => {
    return (
        <nav className={css.nav}>
            <NavLink className={({ isActive }) => `${css["navLink"]} ${globalCss["global-link"]} ${isActive ? css["active"] : ""}`} to="/drinks">Drinks</NavLink>

            <NavLink className={({ isActive }) => `${css["navLink"]} ${globalCss["global-link"]} ${isActive ? css["active"] : ""}`} to="/add">Add drink</NavLink>

            <NavLink className={({ isActive }) => `${css["navLink"]} ${globalCss["global-link"]} ${isActive ? css["active"] : ""}`} to="/my">My drinks</NavLink>

            <NavLink className={({ isActive }) => `${css["navLink"]} ${globalCss["global-link"]} ${isActive ? css["active"] : ""}`} to="/favorites">Favorites</NavLink>
        </nav>      
    )
}