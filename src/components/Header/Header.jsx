import { NavLink } from 'react-router-dom';

import css from './Header.module.css'

import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
import { LogoSvg } from './LogoSvg';
import { BurgerMenuSvg } from './BurgerMenuSvg';


export const Header = () => {


    return (
        <header className={css.header}>
            <navLink to="/link1" className={css.logoBox}>
                <LogoSvg/>
                <h1 className={css.title}>Drink Master</h1>
            </navLink>

            <nav className={css.nav}>
                <NavLink className={css.navLink} to="/link1">Home</NavLink>
                <NavLink className={css.navLink} to="/link1">Drinks</NavLink>
                <NavLink className={css.navLink} to="/link1">Add drink</NavLink>
                <NavLink className={css.navLink} to="/link1">My drinks</NavLink>
                <NavLink className={css.navLink} to="/link1">Favorites</NavLink>
            </nav>
        
            <div className={css.profile}>
                <ThemeSwitcher/>
                <div className={css.userBox}>
                    <img src={require("../../img/header/user.png")} alt="Avatar" className={css.avatar}/>
                    <span className={css.name}>User</span>
                </div>
                <button className={css.burgerMenu}><BurgerMenuSvg/></button>
            </div>
        </header>
    )
}