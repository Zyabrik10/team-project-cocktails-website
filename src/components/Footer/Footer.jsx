import { NavLink } from 'react-router-dom';

import globalCss from '../../css/global.module.css';
import css from './Footer.module.css'

import FacebookSvg from './components/Svg/FacebookSvg';
import InstagramSvg from './components/Svg/InstagramSvg';
import YouTubeSvg from './components/Svg/YouTubeSvg';
import LogoSvg from 'components/Header/components/Svg/LogoSvg';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.circle1}></div>
            <div className={css.circle2}></div>

            <div className={css.container}>
                <div className={css.box1}>
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
                    <nav className={css.nav}>
                        <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`}>Drinks</NavLink>
                        <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`}>Add drink</NavLink>
                        <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`}>My drinks</NavLink>
                        <NavLink className={`${css["navLink"]} ${globalCss["global-link"]}`}>Favorites drinks</NavLink>
                    </nav>
                </div>
                <div className={css.box2}>
                    <div className={css.subscribeBox}>
                        <p className={`${css["subscribeP"]} ${globalCss["global-p"]}`}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
                        <form className={css.subscribeForm} action="">
                            <label className={css.subscribeLabel} htmlFor="subscribe">
                                <input
                                id="subscribe"
                                className={css.subscribeInput}
                                type="text"
                                placeholder='Enter the email'
                                />
                            </label>
                            <button className={css.subscribeBtn}>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>


            <div className={css.serviceBox}>
                <p className={`${css["serviceP"]} ${globalCss["global-p"]}`}>©2023 Drink Master. All rights reserved.</p>
                <div className={css.serviceLinkBox}>
                    <a className={`${css["serviceLink"]} ${globalCss["global-link"]}`} href="#">Privacy Policy</a>
                    <a className={`${css["serviceLink"]} ${globalCss["global-link"]}`} href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}
