import { DrinksItem } from './DrinksItem';
import css from './SecMyDrinks.module.css';

export const DrinksList = () => {
  return (
    <ul>
      <li className={css.drinksList}>
        <DrinksItem />
      </li>
    </ul>
  );
};
