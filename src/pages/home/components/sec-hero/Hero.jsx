// import { Link } from 'react-router-dom';
import css from '../../Home.module.css';
import globalcss from '../../../../css/global.module.css';

export const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div>
        <h1 className={css.headerHero}>
          Craft Your Perfect Drink with Drink Master
        </h1>
        <p className={css.heroDescr}>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        <p className={`${globalcss['custom-button']} ${css['button']}`}>
          Add Drinks
        </p>
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
  );
};
