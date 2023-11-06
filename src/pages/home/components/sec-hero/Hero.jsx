// import { Link } from 'react-router-dom';
import css from '../../Home.module.css';
import globalCss from '../../../../css/global.module.css';
import { Title } from 'components/Title/Title';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section>
        <div className={`${css.heroContainer}`}>
          <div>
            <Title className={css.title}>Craft Your Perfect Drink with Drink Master</Title>
            <p className={`${css.heroDescr} ${globalCss['global-p']}`}>
              Unlock your inner mixologist with Drink Master, your one-stop
              destination for exploring, crafting, and mastering the world's
              finest beverages.
            </p>
            <Link
              className={`${globalCss['custom-button']} ${globalCss['global-p']} ${css['button']}`}
              to="/add"
            >
              Add Drinks
            </Link>
          </div>
          <picture className={css.image}>
            <source
              srcSet={require('../../../../img/home/ice_tea_3x.png')}
              media="(min-width: 1440px)"
              width="359"
              height="445"
            />
            <source
              srcSet={require('../../../../img/home/ice_tea_2x.png')}
              media="(min-width: 768px)"
              width="359"
              height="445"
            />
            <img
              src={require('../../../../img/home/ice_tea_1x.png')}
              alt="ice_tea"
            />
          </picture>
        </div>
    </section>
  );
};
