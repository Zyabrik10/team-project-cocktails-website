import { NavLink } from 'react-router-dom';

import globalCss from '../../../../css/global.module.css';
import css from './Social.module.css';

import LogoSvg from 'components/Header/components/Svg/LogoSvg';
import FacebookSvg from '../Svg/FacebookSvg';
import InstagramSvg from '../Svg/InstagramSvg';
import YouTubeSvg from '../Svg/YouTubeSvg';



export const Social = () => {
    return (
        <div className={css.socialBox}>
            <NavLink to="/home" className={`${css["logoLink"]} ${globalCss["global-link"]}`}>
                <LogoSvg/>
                <p className={`${css["title"]} ${globalCss["global-p"]}`}>Drink Master</p>
            </NavLink>
            <ul className={`${css["socialList"]} ${globalCss["global-list"]}`}>
                <li className={css.socialItem}>
                    <a className={`${css["socialLink"]} ${globalCss["global-link"]}`} href="https://www.facebook.com/goITclub/"><FacebookSvg/></a>
                </li>
                <li className={css.socialItem}>
                    <a className={`${css["socialLink"]} ${globalCss["global-link"]}`} href="https://www.instagram.com/goitclub/"><InstagramSvg/></a>
                </li>
                <li className={css.socialItem}>
                    <a className={`${css["socialLink"]} ${globalCss["global-link"]}`} href="https://www.youtube.com/c/GoIT"><YouTubeSvg/></a>
                </li>
            </ul>
        </div>
    )
}