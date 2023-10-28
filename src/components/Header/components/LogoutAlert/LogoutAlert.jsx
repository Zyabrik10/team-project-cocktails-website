import css from './LogoutAlert.module.css';

import CloseSvg from '../Svg/CloseSvg';


export const LogoutAlert = () => {
    return (
        <div className={css.profileAlert}>
            <button className={css.closeBtn}><CloseSvg/></button>
            <p className={css.alertTitle}>Are you sure you want to log out?</p>
            <div className={css.btnBox}>
                <button className={css.logoutBtn}>Log out</button>
                <button className={css.cancelBtn}>Cancel</button>
            </div>
        </div>
    )
}