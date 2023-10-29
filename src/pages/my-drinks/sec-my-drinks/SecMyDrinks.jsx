import { DrinksItem } from './DrinksItem';
import css from './SecMyDrinks.module.css';

export const SecMyDrinks = () => {
  return (
    <div className={css.drinksList}>
      <DrinksItem />
    </div>
  );
};
