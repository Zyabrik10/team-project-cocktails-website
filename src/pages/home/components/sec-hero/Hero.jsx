import { Link } from 'react-router-dom';
import css from '../../Home.module.css';
import globalcss from '../../../../css/global.module.css';

export const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <h1 className={css.headerHero}>
        Craft Your Perfect Drink with Drink Master
      </h1>
      <p className={css.heroDescr}>
        Unlock your inner mixologist with Drink Master, your one-stop
        destination for exploring, crafting, and mastering the world's finest
        beverages.
      </p>
      {/* <img src="../../../" alt="" /> */}
      <Link
        className={`${css['light']} ${css['button']} ${globalcss['global-link']} ${css['link']}`}
        // to="/add"
      >
       Add Drinks
      </Link>
    </div>
  );
};
