import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from './Header.module.css'

import { ThemeSwitcher } from 'components/Header/components/ThemeSwitcher/ThemeSwitcher';
import { DropDown } from './components/DropDown/DropDown';
import { LogoutAlert } from './components/LogoutAlert/LogoutAlert';
import { UserProfile } from './components/UserProfile/UserProfile';
import { LogoSvg } from './components/Svg/LogoSvg';
import { BurgerMenuSvg } from './components/Svg/BurgerMenuSvg';


export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    }

    return (
        <header className={css.header}>
            <NavLink to="/link1" className={css.logoLink}>
                <LogoSvg/>
                <h1 className={css.title}>Drink Master</h1>
            </NavLink>

            <nav className={css.nav}>
                <NavLink className={css.navLink} to="/link1">Home</NavLink>
                <NavLink className={css.navLink} to="/link1">Drinks</NavLink>
                <NavLink className={css.navLink} to="/link1">Add drink</NavLink>
                <NavLink className={css.navLink} to="/link1">My drinks</NavLink>
                <NavLink className={css.navLink} to="/link1">Favorites</NavLink>
            </nav>
        
            <div className={css.profile}>
                <ThemeSwitcher/>
                <div onClick={handleToggleDropdown} 
                className={css.userBox}>
                    <img src={require("../../img/header/user.png")} alt="Avatar" className={css.avatar}/>
                    <span className={css.name}>User</span>
                    {isDropdownOpen ? (
                        <>
                            <DropDown/>
                            <LogoutAlert/>
                            <UserProfile/>
                        </>
                    )  : <></>}
                </div>

                <button className={css.burgerMenu}><BurgerMenuSvg/></button>
            </div>
        </header>
    )
}