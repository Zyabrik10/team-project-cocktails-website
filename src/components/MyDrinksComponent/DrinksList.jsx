import { DrinksItem } from './DrinksItem';
import css from './MyDrinks.module.css';

export const DrinksList = () => {
  return (
    <>
      <ul className={css.drinksList}>
        <DrinksItem />
      </ul>
    </>
  );
};
