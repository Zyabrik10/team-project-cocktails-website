import { Link } from 'react-router-dom';

import css from './Start.module.css';
import globalCss from '../../css/global.module.css';

import WelcomeLayout from 'components/WelcomeLayout/WelcomeLayout';

export default function Start ()  {
  return (
    <WelcomeLayout>
      <div className={css['start-box']}>
        <h1 className={globalCss['global-title']}>Welcome to the app!</h1>
        <p className={globalCss['global-p']}>
          This app offers more than just a collection of recipes - it is designed
          to be your very own digital cookbook. You can easily save and retrieve
          your own recipes at any time.
        </p>
        <div className={css['buttons-list']}>
          <Link
            className={`${css["light"]} ${css["button"]} ${globalCss['custom-button']} ${globalCss['global-link']}`}
            to="/welcome/signin"
          >
            sign in
          </Link>

          <Link
            className={`${css["dark"]} ${css["button"]} ${globalCss['custom-button']} ${globalCss['global-link']}`}
            to="/welcome/signup"
          >
            sign up
          </Link>
        </div>
      </div>
    </WelcomeLayout>
  );
};
