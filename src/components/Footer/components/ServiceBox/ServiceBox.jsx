import globalCss from '../../../../css/global.module.css';
import css from './ServiceBox.module.css';

export const ServiceBox = () => {
    return (
        <div className={`${css["serviceBox"]} ${globalCss["container"]}`}>
            <p className={`${css["serviceP"]} ${globalCss["global-p"]}`}>©2023 Drink Master. All rights reserved.</p>
            <div className={css.serviceLinkBox}>
                <a className={`${css["serviceLink"]} ${globalCss["global-link"]}`} href="https://www.instagram.com/goitclub/  
">Privacy Policy</a>
                <a className={`${css["serviceLink"]} ${globalCss["global-link"]}`} href="https://www.instagram.com/goitclub/  
">Terms of Service</a>
            </div>
        </div>
    )
}