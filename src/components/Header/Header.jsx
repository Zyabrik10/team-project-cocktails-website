import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import globalCss from '../../css/global.module.css';
import css from './Header.module.css';

import { ThemeSwitcher } from 'components/Header/components/ThemeSwitcher/ThemeSwitcher';
import { LogoSvg } from './components/Svg/LogoSvg';
import { BurgerMenuSvg } from './components/Svg/BurgerMenuSvg';
import { Navigation } from './components/Navigation/Navigation';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { UserProfile } from 'components/ModalWindow/components/UserProfile/UserProfile';

export const Header = () => {
  const [ma, setMa] = useState(false);

  function closeOnClick({ target }) {
    if (
      target.classList.value !== '' &&
      target.classList[0].split('_')[1] === 'modal-wrapper'
    )
      setMa(false);
  }

  function toggle() {
    setMa(!ma);
  }

  return (
    <>
      <ModalWindow active={ma} closeOn={closeOnClick}>
        <UserProfile closeOnButtonCLick={toggle} />
      </ModalWindow>
      <header className={css.header}>
        <div className={`${css['headerBox']} ${globalCss['container']}`}>
          <NavLink
            to="/home"
            className={`${css['logoLink']} ${globalCss['global-link']}`}
          >
            <LogoSvg />
            <p className={`${css['title']} ${globalCss['global-p']}`}>
              Drink Master
            </p>
          </NavLink>
          <Navigation />
          <div className={css.profile}>
            <ThemeSwitcher />
            <div onClick={toggle} className={css.userBox}>
              <img
                src={require('../../img/header/user.png')}
                alt="Avatar"
                className={css.avatar}
              />
              <span className={css.name}>User</span>
            </div>
            <button className={css.burgerMenu}>
              <BurgerMenuSvg />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
