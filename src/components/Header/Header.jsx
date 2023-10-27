import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import globalCss from '../../css/global.module.css';
import css from './Header.module.css'

import { Navigation } from './components/Navigation/Navigation';
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
            <NavLink to="/home" className={`${css["logoLink"]} ${globalCss["global-link"]}`}>
                <LogoSvg/>
                <p className={`${css["title"]} ${globalCss["global-p"]}`}>Drink Master</p>
            </NavLink>

            <Navigation/>

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