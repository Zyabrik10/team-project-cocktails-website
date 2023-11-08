import { CocktailCard } from 'components/CocktailCard/CocktailCard';
import css from './MyDrinks.module.css';

export const DrinksItem = ({ drinks, handleDelete }) => {
  return (
    <>
      {drinks.map(card => (
        <li key={card._id} className={css.drinkCard}>
          <CocktailCard obj={card} id={card._id} handleDelete={handleDelete} />
        </li>
      ))}
    </>
  );
};
