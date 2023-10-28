import { Link } from 'react-router-dom';
import DrinkGroup from './DrinkGroup';
import css from "../Home.module.css"
// import clsx from 'clsx';

export const DrinkContainer = () => {
  let groups = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];
  return (
    <>
      <div className={css.drinkGroup}>
        {groups.map(group => (
          <DrinkGroup group={group} key={group} />
        ))}
      </div>
      <Link>Other Drinks</Link>
    </>
  );
};
