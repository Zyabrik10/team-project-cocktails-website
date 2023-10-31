import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { subscribeUser } from '../../../../redux/auth/operations';

import globalCss from '../../../../css/global.module.css';
import css from './SubscribeForm.module.css';


export const SubscribeForm = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(subscribeUser(email));
        console.log(email)
    };

    return (
        <div className={css.subscribeBox}>
            <p className={`${css["subscribeP"]} ${globalCss["global-p"]}`}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            <form className={css.subscribeForm} onSubmit={handleSubmit}>
                <input
                id="subscribe"
                className={css.subscribeInput}
                type="text"
                placeholder='Enter the email'
                onChange={(e) => setEmail(e.target.value)}    
                />
                <button type="submit" className={css.subscribeBtn}>Subscribe</button>
            </form>
        </div>
    )
}