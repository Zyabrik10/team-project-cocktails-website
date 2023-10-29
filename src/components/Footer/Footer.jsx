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

            <div className={css.container}>
                <div className={css.box1}>
                    <Social/>
                    <Navigation/>
                </div>
                <div className={css.box2}>
                    <SubscribeForm/>
                </div>
            </div>
            <ServiceBox/>
        </footer>
    )
}
