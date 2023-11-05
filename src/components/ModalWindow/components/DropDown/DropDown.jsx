import css from './DropDown.module.css';
import globalCss from '../../../../css/global.module.css';

import EdditSvg from '../Svg/EdditSvg';
import { useCallback, useEffect } from 'react';

export const DropDown = ({
  isOpen,
  setIsOpen,
  setIsModalEditUserOpen,
  setIsModalLogoutOpen,
  closeOnKeyDown
}) => {

  const openLogOut = () => {
    setIsModalLogoutOpen(true);
    setIsOpen(false);
  }

  const openEditUser = () => {
    setIsModalEditUserOpen(true);
    setIsOpen(false);
  }

  const cs = useCallback(closeOnKeyDown, [closeOnKeyDown]);
  
  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', cs);
  }, [isOpen, cs]);

  function closeOnClick({target, currentTarget}) {
    if (target === currentTarget) setIsOpen(false);
  }

  return (  
    <div className={`${css.wrapper} ${isOpen ? css.active : ""}`} onClick={closeOnClick}>
     <div className={`${css.profileDropdown} ${isOpen ? css.active : ''}`}>
        <button className={`${css.edditLink} ${globalCss["global-button"]}`} onClick={openEditUser}>
          Eddit profile
          <span className={css.linkSvg}>
            <EdditSvg />
          </span>
        </button>
        <button
          onClick={openLogOut}
          className={`${css.logoutBtn} ${globalCss['custom-button']} ${globalCss['global-button']}`}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
