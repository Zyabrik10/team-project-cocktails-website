import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

import globalCss from '../../../../css/global.module.css';
import css from './SubscribeForm.module.css';

export const SubscribeForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://drunk404.onrender.com/users/subscribe', { email });
            const { message } = await response.data

            await toast.success(message);
            
            setEmail('');
        } catch (error) {
            toast.error("Something wrong. Try again");

        }
    };

    return (
        <div className={css.subscribeBox}>
            <p className={`${css["subscribeP"]} ${globalCss["global-p"]}`}>
                Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.
            </p>
            <form className={css.subscribeForm} onSubmit={handleSubmit}>
                <input
                    id="subscribe"
                    className={css.subscribeInput}
                    type="email"
                    value={email}
                    placeholder='Enter the email'
                    onChange={(e) => setEmail(e.target.value)}    
                />
                <button type="submit" className={css.subscribeBtn}>Subscribe</button>
            </form>
        </div>
    );
};
