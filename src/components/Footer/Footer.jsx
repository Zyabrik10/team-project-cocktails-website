import globalCss from '../../css/global.module.css';
import css from './Footer.module.css'

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
                    <Social/>
                    <Navigation/>
                </div>
                    <SubscribeForm/>
            </div>
                <ServiceBox/>
        </footer>
    )
}
