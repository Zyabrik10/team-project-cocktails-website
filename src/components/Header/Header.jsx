import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAuth } from 'hooks';

import globalCss from '../../css/global.module.css';
import css from './Header.module.css';

import { ThemeSwitcher } from 'components/Header/components/ThemeSwitcher/ThemeSwitcher';
import { LogoSvg } from './components/Svg/LogoSvg';
import { BurgerMenuSvg } from './components/Svg/BurgerMenuSvg';
import { Navigation } from './components/Navigation/Navigation';

import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { UserProfile } from 'components/ModalWindow/components/UserProfile/UserProfile';
import { DropDown } from 'components/ModalWindow/components/DropDown/DropDown';
import { LogoutAlert } from 'components/ModalWindow/components/LogoutAlert/LogoutAlert';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import CloseSvg from 'components/ModalWindow/components/Svg/CloseSvg';

import { useSelector } from 'react-redux';
import { getThemeColor } from 'redux/theme/selectors';

export const Header = () => {
  const theme = useSelector(getThemeColor);
  const themeClass = theme === 'dark' ? 'main' : 'main light';
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalChooseOpen, setIsModalChooseOpen] = useState(false);
  const [isModalLogoutOpen, setIsModalLogoutOpen] = useState(false);
  const [isModalEditUserOpen, setIsModalEditUserOpen] = useState(false);
  const [isMobileMunuOpen, setIsMobileMunuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openMenu = () => setIsMobileMunuOpen(!isMobileMunuOpen);

  const toggleModalChoose = () => setIsModalChooseOpen(!isModalChooseOpen);

  function closeOnKeyDown({ key }) {
    // console.log('key');
    if (key === 'Escape') {
      if (isModalChooseOpen) setIsModalChooseOpen(false);
      else if (isModalLogoutOpen) setIsModalLogoutOpen(false);
      else if (isModalEditUserOpen) setIsModalEditUserOpen(false);

      document.removeEventListener('keydown', closeOnKeyDown);
    }
  }

  return (
    <>
      <ModalWindow
        isShown={isModalEditUserOpen}
        setClose={setIsModalEditUserOpen}
        closeOnKeyDown={closeOnKeyDown}
      >
        <UserProfile
          isShown={isModalEditUserOpen}
          setClose={setIsModalEditUserOpen}
          closeOnKeyDown={closeOnKeyDown}
        />
      </ModalWindow>

      <ModalWindow isShown={isModalLogoutOpen} setClose={setIsModalLogoutOpen}>
        <LogoutAlert
          isShown={isModalLogoutOpen}
          setClose={setIsModalLogoutOpen}
          closeOnKeyDown={closeOnKeyDown}
        />
      </ModalWindow>
      <DropDown
        isOpen={isModalChooseOpen}
        setIsOpen={setIsModalChooseOpen}
        setIsModalEditUserOpen={setIsModalEditUserOpen}
        setIsModalLogoutOpen={setIsModalLogoutOpen}
        closeOnKeyDown={closeOnKeyDown}
      />

      <header className={`${css[`header`]} ${themeClass}`}>
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
            {windowWidth > 1440 && <ThemeSwitcher />}
            {windowWidth < 1440 && isMobileMunuOpen ? (
              <ThemeSwitcher />
            ) : (
              <div onClick={toggleModalChoose} className={css.userBox}>
                <img src={user.avatarURL} alt="Avatar" className={css.avatar} />
                {/* {user.avatarURL ? <img src={user.avatarURL} alt="Avatar" className={css.avatar} /> : <img src={require("../../img/header/user.png")} alt="Avatar" className={css.avatar} />} */}

                <span className={css.name}>{user.username}</span>
              </div>
            )}
            <button onClick={openMenu} className={css.burgerMenu}>
              {isMobileMunuOpen ? <CloseSvg /> : <BurgerMenuSvg />}
            </button>
          </div>
        </div>
      </header>
      <MobileMenu closeMenu={openMenu} isOpen={isMobileMunuOpen} />

      <MobileMenu />
    </>
  );
};
