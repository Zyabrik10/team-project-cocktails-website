import { DrinksItem } from './DrinksItem';
import css from './MyDrinks.module.css';

export const DrinksList = ({ drinks, handleDelete }) => {
  return (
    <>
      <ul className={css.drinksList}>
        <DrinksItem drinks={drinks} handleDelete={handleDelete} />
      </ul>
    </>
  );
};
