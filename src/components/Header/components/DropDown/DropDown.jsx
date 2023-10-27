import { NavLink } from 'react-router-dom';

import css from './DropDown.module.css';

import EdditSvg from '../Svg/EdditSvg';


export const DropDown = () => {

    return (
        <div className={css.profileDropdown}>
            <NavLink className={css.edditLink} to="/profile">Eddit profile<span className={css.linkSvg}><EdditSvg/></span></NavLink>
            <button className={css.logoutBtn}>Log out</button>
        </div>
    )
}