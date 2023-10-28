import css from './UserProfile.module.css';

import CloseSvg from "../Svg/CloseSvg"
import AddSvg from '../Svg/AddSvg';
import EdditSvg from '../Svg/EdditSvg';


export const UserProfile = () => {
    return (
        <div className={css.userProfile}>
            <div className={css.circle1}></div>
            <div className={css.circle2}></div>

            <button className={css.closeBtn}><CloseSvg/></button>
            <div className={css.imgBox}>
                <img className={css.profileImg} src={require("../../../../img/header/user.png")} alt="Avatar" />
                <button className={css.addBtn}><AddSvg/></button>
            </div>

            <form className={css.inputBox} action="">
                <label className={css.avatarLabel} htmlFor="avatar" >
                <input className={css.avatarInput} id="avatar" type="text" placeholder="Enter new Name" />
            <span className={css.inputSvg}><EdditSvg/></span>
                </label>
                <button className={css.submitBtn}>Save changes</button>
            </form>
        </div>
    )
}