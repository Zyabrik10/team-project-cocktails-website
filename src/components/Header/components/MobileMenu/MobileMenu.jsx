import css from './MobileMenu.module.css';

import { Navigation } from '../Navigation/Navigation';


export const MobileMenu = ({isOpen}) => {

  return isOpen ?
    <div className={`${css['modal-wrapper']}`}>
      <Navigation isOpen={isOpen}/>
    </div>
    :
  <></>
};
