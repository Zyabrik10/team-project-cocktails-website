import { NavLink } from 'react-router-dom';

import globalCss from '../../../../css/global.module.css';
import css from './Navigation.module.css';


export const Navigation = ({ isOpen }) => {
    
    
    
    const className = isOpen ? "navMobile" : "none";
    return (
        <nav className={`${css["nav"]} ${css[className]}`}>
            <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`} to="/home">Home</NavLink>
            <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`} to="/drinks">Drinks</NavLink>
            <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`} to="/add">Add drink</NavLink>
            <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`} to="/my">My drinks</NavLink>
            <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`} to="/favorites">Favorites</NavLink>
        </nav>
    )
}