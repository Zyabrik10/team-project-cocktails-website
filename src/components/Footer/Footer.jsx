import { NavLink } from 'react-router-dom';

import globalCss from '../../css/global.module.css';
import css from './Footer.module.css'

import LogoSvg from 'components/Header/components/Svg/LogoSvg';
import { SubscribeForm } from './components/SubscribeForm/SubscribeForm';
import { Social } from './components/Social/Social';
import { Navigation } from './components/Navigation/Navigation';
import { ServiceBox } from './components/ServiceBox/ServiceBox';


export const Footer = () => {
    return (
        <footer className={css.footer}>
            <div className={css.circle1}></div>
            <div className={css.circle2}></div>

            <div className={`${css["footerContent"]} ${globalCss["container"]}`}>
                <div className={css.box1}>
                    <div className={css.socialBox}>
                        <NavLink to="/home" className={`${css["logoLink"]} ${globalCss["global-link"]}`}>
                            <LogoSvg/>
                            <p className={`${css["title"]} ${globalCss["global-p"]}`}>Drink Master</p>
                        </NavLink>
                        <Social/>
                    </div>
                    <Navigation/>
                </div>
                <SubscribeForm />
            </div>
                <ServiceBox/>
        </footer>
    )
}
