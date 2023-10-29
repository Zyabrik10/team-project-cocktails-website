import globalCss from '../../../../css/global.module.css';
import css from './SubscribeForm.module.css';


export const SubscribeForm = () => {

    return (
        <div className={css.subscribeBox}>
            <p className={`${css["subscribeP"]} ${globalCss["global-p"]}`}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            <form className={css.subscribeForm} action="">
                <input
                id="subscribe"
                className={css.subscribeInput}
                type="text"
                placeholder='Enter the email'
                />
                <button className={css.subscribeBtn}>Subscribe</button>
            </form>
        </div>
    )
}