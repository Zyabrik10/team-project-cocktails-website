import css from './MobileMenu.module.css';


import { Navigation } from '../Navigation/Navigation';
import { useEffect } from 'react';


export const MobileMenu = ({ isOpen, closeMenu}) => {

useEffect(() => {
  if (isOpen) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return () => {
    document.body.style.overflow = ''
  };
}, [isOpen]);

  return isOpen ?
    <div className={`${css['modal-wrapper']}`} onClick={closeMenu}>
      <div className={css.circle1}></div>
      <div className={css.circle2}></div>
      <div className={css.circle3}></div>

      <Navigation isOpen={isOpen}/>
    </div>
    :
  <></>
};
